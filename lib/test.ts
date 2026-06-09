
// --- TYPE DEFINITIONS ---

interface FormDataState {
  service: string;
  island: string;
  kitchens: number | string;
  kitchenLocation: string;
  kitchenQuality: string;
  bathrooms: number | string;
  bathroomLocation: string;
  bathroomQuality: string;
  additionsRooms: number | string;
  additionsKitchens: number | string;
  additionsKitchenLocation: string;
  additionsQuality: string;
  newConstructionSize: number | string;
  newConstructionBedrooms: number | string;
  newConstructionBathrooms: number | string;
  newConstructionQuality: string;
  homeRemodelingSqft: number | string;
  homeRemodelingQuality: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}

// --- PRICING LOGIC (copied from lib/pricing.ts) ---

const islands = [
    { name: 'Oahu', priceMultiplier: 1.0 },
    { name: 'Maui', priceMultiplier: 1.2 },
    { name: 'Kauai', priceMultiplier: 1.25 },
    { name: 'Big Island', priceMultiplier: 1.15 },
    { name: 'Molokai', priceMultiplier: 1.4 },
    { name: 'Lanai', priceMultiplier: 1.5 },
];

const servicePricing = {
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

function calculateEstimate(formData: FormDataState): [number, number] {
    let baseCost: [number, number] = [0, 0];
    const islandMultiplier = islands.find(i => i.name === formData.island)?.priceMultiplier || 1;

    type QualityTier = 'builder' | 'selective_grade' | 'high_end';

    const getTierCost = (service: keyof typeof servicePricing, quality: QualityTier) => {
        // @ts-expect-error
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
                const kitchenQuality = formData.additionsQuality as QualityTier;
                const kitchenAdditionCost = pricing.kitchenAddition[kitchenQuality];
                kitchenCost[0] = kitchenAdditionCost[0] * Number(formData.additionsKitchens);
                kitchenCost[1] = kitchenAdditionCost[1] * Number(formData.additionsKitchens);
            }

            baseCost = [
                roomCost[0] + kitchenCost[0],
                roomCost[1] + kitchenCost[1],
            ];

            if (formData.additionsKitchenLocation === 'outdoor') {
                 baseCost = baseCost.map(c => c * pricing.outdoorMultiplier) as [number, number];
            }
            break;
        }
    }

    const finalCost = [
        baseCost[0] * islandMultiplier,
        baseCost[1] * islandMultiplier
    ];

    return [Math.round(finalCost[0]), Math.round(finalCost[1])];
}

// --- TEST DATA ---

const baseFormData: FormDataState = {
    service: '',
    island: '',
    kitchens: 0,
    kitchenLocation: '',
    kitchenQuality: '',
    bathrooms: 0,
    bathroomLocation: '',
    bathroomQuality: '',
    additionsRooms: 0,
    additionsKitchens: 0,
    additionsKitchenLocation: '',
    additionsQuality: '',
    newConstructionSize: 0,
    newConstructionBedrooms: 0,
    newConstructionBathrooms: 0,
    newConstructionQuality: '',
    homeRemodelingSqft: 0,
    homeRemodelingQuality: '',
    name: '', 
    email: '', 
    phone: '', 
    address: ''
};

const testCases = [
    // New Construction
    { name: 'NC - Builder - Oahu', formData: { ...baseFormData, service: 'new-construction', island: 'Oahu', newConstructionSize: 2000, newConstructionQuality: 'builder' }, expected: [500000, 1200000] },
    { name: 'NC - Selective-Grade - Molokai', formData: { ...baseFormData, service: 'new-construction', island: 'Molokai', newConstructionSize: 3000, newConstructionQuality: 'selective_grade' }, expected: [1470000, 3570000] },
    { name: 'NC - High-End - Maui', formData: { ...baseFormData, service: 'new-construction', island: 'Maui', newConstructionSize: 2000, newConstructionQuality: 'high_end' }, expected: [1560000, 2880000] },

    // Home Remodeling
    { name: 'HR - Builder - Oahu', formData: { ...baseFormData, service: 'home-remodeling', island: 'Oahu', homeRemodelingSqft: 1000, homeRemodelingQuality: 'builder' }, expected: [250000, 500000] },
    { name: 'HR - Selective-Grade - Oahu', formData: { ...baseFormData, service: 'home-remodeling', island: 'Oahu', homeRemodelingSqft: 500, homeRemodelingQuality: 'selective_grade' }, expected: [250000, 400000] },
    { name: 'HR - High-End - Big Island', formData: { ...baseFormData, service: 'home-remodeling', island: 'Big Island', homeRemodelingSqft: 1000, homeRemodelingQuality: 'high_end' }, expected: [920000, 1725000] },

    // Kitchen Remodeling
    { name: 'KR - Builder - 2 Kitchens - Indoor - Oahu', formData: { ...baseFormData, service: 'kitchen-remodeling', island: 'Oahu', kitchens: 2, kitchenQuality: 'builder', kitchenLocation: 'indoor' }, expected: [40000, 100000] },
    { name: 'KR - Selective-Grade - 1 Kitchen - Indoor - Kauai', formData: { ...baseFormData, service: 'kitchen-remodeling', island: 'Kauai', kitchens: 1, kitchenQuality: 'selective_grade', kitchenLocation: 'indoor' }, expected: [37500, 81250] },
    { name: 'KR - High-End - 1 Kitchen - Outdoor - Oahu', formData: { ...baseFormData, service: 'kitchen-remodeling', island: 'Oahu', kitchens: 1, kitchenQuality: 'high_end', kitchenLocation: 'outdoor' }, expected: [93750, 187500] },

    // Bathroom Remodeling
    { name: 'BR - Builder - 2 Bathrooms - Indoor - Oahu', formData: { ...baseFormData, service: 'bathroom-remodeling', island: 'Oahu', bathrooms: 2, bathroomQuality: 'builder', bathroomLocation: 'indoor' }, expected: [16000, 30000] },
    { name: 'BR - Selective-Grade - 3 Bathrooms - Kauai', formData: { ...baseFormData, service: 'bathroom-remodeling', island: 'Kauai', bathrooms: 3, bathroomQuality: 'selective_grade', bathroomLocation: 'indoor' }, expected: [45000, 93750] },
    { name: 'BR - High-End - 1 Bathroom - Outdoor - Lanai', formData: { ...baseFormData, service: 'bathroom-remodeling', island: 'Lanai', bathrooms: 1, bathroomQuality: 'high_end', bathroomLocation: 'outdoor' }, expected: [54000, 153000] },
    
    // Additions
    { name: 'Additions - Builder - 2 Rooms, 1 Kitchen - Indoor - Oahu', formData: { ...baseFormData, service: 'additions', island: 'Oahu', additionsRooms: 2, additionsKitchens: 1, additionsQuality: 'builder', additionsKitchenLocation: 'indoor' }, expected: [100000, 170000] },
    { name: 'Additions - Builder - 2 Rooms, 1 Kitchen - Outdoor - Oahu', formData: { ...baseFormData, service: 'additions', island: 'Oahu', additionsRooms: 2, additionsKitchens: 1, additionsQuality: 'builder', additionsKitchenLocation: 'outdoor' }, expected: [110000, 187000] },
    { name: 'Additions - Selective-Grade - 1 Room, 0 Kitchens - Maui', formData: { ...baseFormData, service: 'additions', island: 'Maui', additionsRooms: 1, additionsKitchens: 0, additionsQuality: 'selective_grade', additionsKitchenLocation: 'indoor' }, expected: [72000, 120000] },
    { name: 'Additions - High-End - 3 Rooms, 2 Kitchens - Maui', formData: { ...baseFormData, service: 'additions', island: 'Maui', additionsRooms: 3, additionsKitchens: 2, additionsQuality: 'high_end', additionsKitchenLocation: 'indoor' }, expected: [540000, 864000] },
];


// --- TEST RUNNER ---

let failed = 0;
let passed = 0;

console.log('Running comprehensive pricing logic tests...\n');

testCases.forEach(test => {
  const [low, high] = calculateEstimate(test.formData);
  const passedTest = low === test.expected[0] && high === test.expected[1];
  
  if (passedTest) {
    console.log(`\x1b[32mPASS\x1b[0m: ${test.name}`);
    passed++;
  } else {
    console.log(`\x1b[31mFAIL\x1b[0m: ${test.name}`);
    console.log(`  Expected: [${test.expected[0]}, ${test.expected[1]}]`);
    console.log(`  Actual:   [${low}, ${high}]`);
    failed++;
  }
});

console.log(`\nTests complete. Passed: ${passed}, Failed: ${failed}\n`);

if (failed > 0) {
    process.exit(1)
}
