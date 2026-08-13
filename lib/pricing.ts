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
        // Per square foot
        builder: [250, 600],
        selective_grade: [350, 850],
        high_end: [650, 1200],
    },
    'home-remodeling': {
        // Per square foot
        builder: [250, 500],
        selective_grade: [500, 800],
        high_end: [800, 1500],
    },
    /*   REMOVED FROM BEING FEATURED IN THE ESTIMATOR
    'pest-repair': {
        // Per room, focused on repair and restoration
        builder: [5000, 10000],
        mid: [10000, 20000],
        luxury: [20000, 35000],
    
    },  */
    'kitchen-remodeling': {
        // Per kitchen
        builder: [20000, 50000],
        selective_grade: [30000, 65000],
        high_end: [75000, 150000],
        outdoorMultiplier: 1.25, // Outdoor kitchens require more robust materials and utilities
    },
    'bathroom-remodeling': {
        // Per bathroom
        builder: [8000, 15000],
        selective_grade: [12000, 25000],
        high_end: [30000, 85000],
        outdoorMultiplier: 1.20, // Outdoor showers/bathrooms
    },
    /*    REMOVED THESE SERVICES FROM ESTIMATOR COMPONENT
    'storm-damage-repair': {
        // Price per room
        builder: [22000, 30000],
        mid: [30000, 55000],
        luxury: [55000, 90000],
        completeRenoMultiplier: 2.5, // Complete renovation is more than just summing rooms
        outdoorMultiplier: 1.15, 
    },
    
    'house-moving': {
        sameLotBase: [20000, 30000],      // Lifting, new foundation, etc.
        offLotBase: [35000, 45000],     // Base cost for complex logistics of moving on roads
        perMile: 6000,                   // Cost per mile traveled
        perSqFt: [50, 80],               // Cost based on the size of the house
    },
    */
    'additions': {
        // Price per square foot, assuming average room size of ~200 sq ft for calculations
        perSqFt: {
            builder: [200, 300],
            selective_grade: [300, 500],
            high_end: [500, 700],
        },
        // Kitchens in an addition have their own significant, separate cost
        kitchenAddition: {
            builder: [20000, 50000],
            selective_grade: [30000, 65000],
            high_end: [75000, 150000],
        },
        outdoorMultiplier: 1.1, // Decks, lanais are extensions of living space
    }
};

// --- Main calculation function ---
export function calculateEstimate(formData: FormDataState): [number, number] {
    let baseCost: [number, number] = [0, 0];
    const islandMultiplier = islands.find(i => i.name === formData.island)?.priceMultiplier || 1;

    type QualityTier = 'builder' | 'selective_grade' | 'high_end'; // Updated to match new keys

    const getTierCost = (service: keyof typeof servicePricing, quality: QualityTier) => {
        // @ts-expect-error - This is a safe way to handle the dynamic nature of the pricing object
        return servicePricing[service][quality] as [number, number];
    }

    switch (formData.service) {
        case 'new-construction': {
            const quality = formData.newConstructionQuality as QualityTier;
            const qualityCost = getTierCost('new-construction', quality);
            baseCost = [
                qualityCost[0] * Number(formData.newConstructionSize),
                qualityCost[1] * Number(formData.newConstructionSize),
            ];
            break;
        }
        case 'home-remodeling': {
            const quality = formData.homeRemodelingQuality as QualityTier;
            const qualityCost = getTierCost('home-remodeling', quality);
            baseCost = [
                qualityCost[0] * Number(formData.homeRemodelingSqft), 
                qualityCost[1] * Number(formData.homeRemodelingSqft),
            ];
            break;
        }
        case 'kitchen-remodeling': {
            const quality = formData.kitchenQuality as QualityTier;
            const qualityCost = getTierCost('kitchen-remodeling', quality);
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
            const qualityCost = getTierCost('bathroom-remodeling', quality);
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
            const AVG_ROOM_SIZE = 200; // sq ft

            const roomSqFt = Number(formData.additionsRooms) * AVG_ROOM_SIZE;
            const roomCost = [
                roomSqFt * perSqFtCost[0],
                roomSqFt * perSqFtCost[1],
            ];

            const kitchenCost: [number, number] = [0, 0];
            if (Number(formData.additionsKitchens) > 0) {
                // For kitchens in additions, we use the addition-specific kitchen costs
                const kitchenQuality = formData.additionsQuality as QualityTier;
                const kitchenAdditionCost = pricing.kitchenAddition[kitchenQuality];
                kitchenCost[0] = kitchenAdditionCost[0] * Number(formData.additionsKitchens);
                kitchenCost[1] = kitchenAdditionCost[1] * Number(formData.additionsKitchens);
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
        /*
        case 'house-moving': {
            const pricing = servicePricing['house-moving'];
            // @ts-ignore
            const sqFt = Number(formData.houseMovingSqft) || 1500;
            // @ts-ignore
            const distance = Number(formData.houseMovingDistance) || 0;
            // @ts-ignore
            const moveType = formData.houseMovingType || 'sameLot';
        
            let lotCost: [number, number] = [0, 0];
            if (moveType === 'offLot') {
                lotCost = [
                    pricing.offLotBase[0] + distance * pricing.perMile,
                    pricing.offLotBase[1] + distance * pricing.perMile,
                ];
            } else {
                lotCost = pricing.sameLotBase;
            }
        
            const sizeCost: [number, number] = [
                sqFt * pricing.perSqFt[0],
                sqFt * pricing.perSqFt[1],
            ];
        
            baseCost = [
                lotCost[0] + sizeCost[0],
                lotCost[1] + sizeCost[1],
            ];
            break;
        }
        */
    }

    const finalCost = [
        baseCost[0] * islandMultiplier,
        baseCost[1] * islandMultiplier
    ];

    // Return rounded, whole numbers for the final estimate
    return [Math.round(finalCost[0]), Math.round(finalCost[1])];
};
