
import { calculateEstimate } from './pricing';
import { FormDataState } from '../components/CostEstimator';

// A simple test runner to verify the pricing logic.

interface TestCase {
  name: string;
  formData: FormDataState;
  expected: [number, number];
}

const testCases: TestCase[] = [
  {
    name: 'New Construction - Builder - Oahu',
    formData: {
      service: 'new-construction',
      island: 'Oahu',
      newConstructionSize: 2000,
      newConstructionQuality: 'builder',
    } as FormDataState,
    expected: [500000, 1200000],
  },
  {
    name: 'New Construction - High-End - Maui',
    formData: {
      service: 'new-construction',
      island: 'Maui',
      newConstructionSize: 2000,
      newConstructionQuality: 'high_end',
    } as FormDataState,
    expected: [1560000, 2880000],
  },
  {
    name: 'Home Remodeling - Selective-Grade - Oahu',
    formData: {
      service: 'home-remodeling',
      island: 'Oahu',
      homeRemodelingSqft: 500,
      homeRemodelingQuality: 'selective_grade',
    } as FormDataState,
    expected: [250000, 400000],
  },
  {
    name: 'Kitchen Remodeling - Builder - 2 Kitchens - Indoor - Oahu',
    formData: {
      service: 'kitchen-remodeling',
      island: 'Oahu',
      kitchens: 2,
      kitchenQuality: 'builder',
      kitchenLocation: 'indoor',
    } as FormDataState,
    expected: [40000, 100000],
  },
  {
    name: 'Kitchen Remodeling - High-End - 1 Kitchen - Outdoor - Oahu',
    formData: {
      service: 'kitchen-remodeling',
      island: 'Oahu',
      kitchens: 1,
      kitchenQuality: 'high_end',
      kitchenLocation: 'outdoor',
    } as FormDataState,
    expected: [93750, 187500],
  },
  {
    name: 'Bathroom Remodeling - Selective-Grade - 3 Bathrooms - Kauai',
    formData: {
      service: 'bathroom-remodeling',
      island: 'Kauai',
      bathrooms: 3,
      bathroomQuality: 'selective_grade',
      bathroomLocation: 'indoor',
    } as FormDataState,
    expected: [45000, 93750],
  },
  {
    name: 'Additions - Builder - 2 Rooms, 1 Kitchen - Indoor - Oahu',
    formData: {
      service: 'additions',
      island: 'Oahu',
      additionsRooms: 2,
      additionsKitchens: 1,
      additionsQuality: 'builder',
      additionsKitchenLocation: 'indoor',
    } as FormDataState,
    expected: [100000, 170000],
  },
  {
    name: 'Additions - Builder - 2 Rooms, 1 Kitchen - Outdoor - Oahu',
    formData: {
        service: 'additions',
        island: 'Oahu',
        additionsRooms: 2,
        additionsKitchens: 1,
        additionsQuality: 'builder',
        additionsKitchenLocation: 'outdoor',
    } as FormDataState,
    expected: [110000, 187000],
  },
  {
    name: 'Additions - High-End - 3 Rooms, 2 Kitchens - Maui',
    formData: {
        service: 'additions',
        island: 'Maui',
        additionsRooms: 3,
        additionsKitchens: 2,
        additionsQuality: 'high_end',
        additionsKitchenLocation: 'indoor',
    } as FormDataState,
    // roomCost = (3 * 200) * [500, 700] = [300000, 420000]
    // kitchenCost = 2 * [75000, 150000] = [150000, 300000]
    // baseCost = [450000, 720000]
    // finalCost = baseCost * 1.2 = [540000, 864000]
    expected: [540000, 864000],
  },
];

let failed = 0;
let passed = 0;

console.log('Running pricing logic tests...\n');

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
  // Exit with a non-zero code to indicate failure
  process.exit(1);
}
