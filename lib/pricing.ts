import { FormDataState } from '../components/CostEstimator';

// --- Island-based cost multipliers ---
export const islands = [
    { name: 'Oahu', priceMultiplier: 1.0 }, // Baseline
    { name: 'Maui', priceMultiplier: 1.2 }, // Higher cost of logistics and labor
    { name: 'Kauai', priceMultiplier: 1.25 },
    { name: 'Big Island', priceMultiplier: 1.15 }, // Varies by location, but generally higher than Oahu
    { name: 'Molokai', priceMultiplier: 1.4 }, // Significant logistical challenges
    { name: 'Lanai', priceMultiplier: 1.5 },
];

// --- Detailed, Hawaii-specific pricing structure ---
export const servicePricing = {
    'new-construction': {
        builder: [250, 600],
        selective_grade: [350, 850],
        high_end: [650, 1200],
    },
    'home-remodeling': {
        builder: [250, 500],
        selective_grade: [500, 800],
        high_end: [800, 1500],
    },
    'kitchen-remodeling': {
        builder: [20000, 50000],
        selective_grade: [30000, 65000],
        high_end: [75000, 150000],
        outdoorMultiplier: 1.25, 
    },
    'bathroom-remodeling': {
        builder: [8000, 15000],
        selective_grade: [12000, 25000],
        high_end: [30000, 85000],
        outdoorMultiplier: 1.20, 
    },
    'additions': {
        perSqFt: {
            builder: [200, 300],
            selective_grade: [300, 500],
            high_end: [500, 700],
        },
        kitchenAddition: {
            builder: [20000, 50000],
            selective_grade: [30000, 65000],
            high_end: [75000, 150000],
        },
        outdoorMultiplier: 1.1, 
    }
};

// --- Main calculation function ---
export function calculateEstimate(formData: FormDataState): [number, number] {
    let baseCost: [number, number] = [0, 0];
    const islandMultiplier = islands.find(i => i.name === formData.island)?.priceMultiplier || 1;

    type QualityTier = 'builder' | 'selective_grade' | 'high_end';

    switch (formData.service) {
        case 'new-construction': {
            const quality = formData.newConstructionQuality as QualityTier;
            const qualityCost = servicePricing['new-construction'][quality];
            if (!qualityCost) {
                console.error(`Pricing not found for service: new-construction, quality: ${quality}`);
                return [0, 0];
            }
            baseCost = [
                qualityCost[0] * Number(formData.newConstructionSize),
                qualityCost[1] * Number(formData.newConstructionSize),
            ];
            break;
        }
        case 'home-remodeling': {
            const quality = formData.homeRemodelingQuality as QualityTier;
            const servicePrices = servicePricing['home-remodeling'];
            const qualityCost = servicePrices[quality];
            if (!qualityCost) {
                console.error(`Pricing not found for service: home-remodeling, quality: ${quality}`);
                return [0, 0];
            }
            baseCost = [
                qualityCost[0] * Number(formData.homeRemodelingSqft), 
                qualityCost[1] * Number(formData.homeRemodelingSqft),
            ];
            break;
        }
        case 'kitchen-remodeling': {
            const quality = formData.kitchenQuality as QualityTier;
            const qualityCost = servicePricing['kitchen-remodeling'][quality];
            if (!qualityCost) {
                console.error(`Pricing not found for service: kitchen-remodeling, quality: ${quality}`);
                return [0, 0];
            }
            baseCost = [
                qualityCost[0] * Number(formData.kitchens),
                qualityCost[1] * Number(formData.kitchens),
            ];
            if (formData.kitchenLocation === 'outdoor') {
                const multiplier = servicePricing['kitchen-remodeling'].outdoorMultiplier;
                baseCost = baseCost.map(c => c * multiplier) as [number, number];
            }
            break;
        }
        case 'bathroom-remodeling': {
            const quality = formData.bathroomQuality as QualityTier;
            const qualityCost = servicePricing['bathroom-remodeling'][quality];
            if (!qualityCost) {
                console.error(`Pricing not found for service: bathroom-remodeling, quality: ${quality}`);
                return [0, 0];
            }
            baseCost = [
                qualityCost[0] * Number(formData.bathrooms),
                qualityCost[1] * Number(formData.bathrooms),
            ];
            if (formData.bathroomLocation === 'outdoor') {
                const multiplier = servicePricing['bathroom-remodeling'].outdoorMultiplier;
                baseCost = baseCost.map(c => c * multiplier) as [number, number];
            }
            break;
        }
        case 'additions': {
            const pricing = servicePricing.additions;
            const quality = formData.additionsQuality as QualityTier;
            const perSqFtCost = pricing.perSqFt[quality];
            if (!perSqFtCost) {
                console.error(`Pricing not found for service: additions, quality: ${quality}`);
                return [0, 0];
            }
            
            const AVG_ROOM_SIZE = 200; // sq ft
            const roomSqFt = Number(formData.additionsRooms) * AVG_ROOM_SIZE;
            const roomCost = [
                roomSqFt * perSqFtCost[0],
                roomSqFt * perSqFtCost[1],
            ];

            const kitchenCost: [number, number] = [0, 0];
            if (Number(formData.additionsKitchens) > 0) {
                const kitchenQuality = formData.additionsQuality as QualityTier;
                const kitchenAdditionCost = pricing.kitchenAddition[kitchenQuality];
                if (!kitchenAdditionCost) {
                     console.error(`Pricing not found for additions kitchen, quality: ${kitchenQuality}`);
                } else {
                    kitchenCost[0] = kitchenAdditionCost[0] * Number(formData.additionsKitchens);
                    kitchenCost[1] = kitchenAdditionCost[1] * Number(formData.additionsKitchens);
                }
            }

            baseCost = [
                roomCost[0] + kitchenCost[0],
                roomCost[1] + kitchenCost[1],
            ];

            if (formData.additionsKitchenLocation !== 'indoor') {
                 baseCost = baseCost.map(c => c * pricing.outdoorMultiplier) as [number, number];
            }
            break;
        }
    }

    const finalCost = [
        baseCost[0] * islandMultiplier,
        baseCost[1] * islandMultiplier
    ];

    // Return rounded, whole numbers for the final estimate
    return [Math.round(finalCost[0]), Math.round(finalCost[1])];
};
