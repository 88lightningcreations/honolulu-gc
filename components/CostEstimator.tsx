'use client'

import React, { useState, useEffect } from 'react';
import styles from './CostEstimator.module.css';
import { services } from '../lib/services';
import { calculateEstimate, islands } from '../lib/pricing';
import { useFormState, useFormStatus } from 'react-dom';
import { submitEstimate } from '../app/actions';

// Define a specific type for our form data
export interface FormDataState {
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

// Define a type for the validation errors object
type FormErrors = Partial<Record<keyof FormDataState, string>>;

const initialState = {
    success: false,
    message: '',
};

function SubmitButton() {
    const { pending } = useFormStatus();
  
    return (
      <button type="submit" className={styles.button} disabled={pending}>
        {pending ? 'Submitting...' : 'Submit Estimate'}
      </button>
    );
  }

const CostEstimator = ({ preselectedService }: { preselectedService?: string }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormDataState>({
    service: preselectedService || '',
    island: '',
    kitchens: 1,
    kitchenLocation: 'indoor',
    kitchenQuality: 'builder',
    bathrooms: 1,
    bathroomLocation: 'indoor',
    bathroomQuality: 'builder',
    additionsRooms: 1,
    additionsKitchens: 0,
    additionsKitchenLocation: 'indoor',
    additionsQuality: 'builder',
    newConstructionSize: 2000,
    newConstructionBedrooms: 3,
    newConstructionBathrooms: 2,
    newConstructionQuality: 'builder',
    homeRemodelingSqft: 1000,
    homeRemodelingQuality: 'builder',
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [estimate, setEstimate] = useState<[number, number]>([0, 0]);
  const [state, formAction] = useFormState(submitEstimate, initialState);

  console.log('Component rendered. formData.service:', formData.service);

  useEffect(() => {
    if (state.success) {
      setStep(4); // Move to thank you step on successful submission
    }
  }, [state]);

  const nextStep = () => {
    if (validateStep()) {
      if (step === 2) {
        const [low, high] = calculateEstimate(formData);
        setEstimate([low, high]);
      }
      setStep(prev => prev + 1);
    }
  };

  const prevStep = () => setStep(prev => prev - 1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev: FormDataState) => ({ ...prev, [name]: value }));
  };

  const handleServiceSelection = (service: string) => {
    console.log('handleServiceSelection triggered with service:', service);
    setFormData(prev => ({ ...prev, service }));
  };

  const handleQualitySelection = (service: keyof FormDataState, quality: string) => {
    setFormData(prev => ({ ...prev, [service]: quality }));
  }

  const handleLocationSelection = (service: keyof FormDataState, location: string) => {
    setFormData(prev => ({ ...prev, [service]: location }));
  }

  const validateStep = () => {
    console.log('Validating step 1 with formData.service:', formData.service);
    const newErrors: FormErrors = {};
    if (step === 1) {
      if (!formData.service) newErrors.service = 'Please select a service.';
      if (!formData.island) newErrors.island = 'Please select an island.';
    }
    if (step === 3) {
        if (!formData.name) newErrors.name = 'Please enter your name.';
        if (!formData.email) newErrors.email = 'Please enter your email.';
        if (!formData.phone) newErrors.phone = 'Please enter your phone number.';
        if (!formData.address) newErrors.address = 'Please enter your address.';
    }
    setErrors(newErrors);
    console.log('Validation result:', Object.keys(newErrors).length === 0);
    return Object.keys(newErrors).length === 0;
  };

  const renderStep = () => {
    const availableServices = services.filter(service => 
        !['pest-repair', 'storm-damage-repair', 'house-moving'].includes(service.slug)
    );
    switch (step) {
      case 1:
        return (
            <div>
              <h2>Step 1: Select Your Service and Location</h2>
              <div className={styles.serviceSelection}>
                {availableServices.map(service => (
                    <button 
                        key={service.slug} 
                        type="button"
                        className={`${styles.serviceCard} ${formData.service === service.slug ? styles.selected : ''}`}
                        onClick={() => handleServiceSelection(service.slug)}
                    >
                        {/* Add an icon here later */}
                        <span>{service.title}</span>
                    </button>
                ))}
              </div>
                {errors.service && <p className={styles.error}>{errors.service}</p>}
              <div className={styles.formGroup}>
                <label htmlFor="island">Island</label>
                <select name="island" id="island" value={formData.island} onChange={handleChange}>
                  <option value="">Select an island</option>
                  {islands.map(island => (
                    <option key={island.name} value={island.name}>{island.name}</option>
                  ))}
                </select>
                {errors.island && <p className={styles.error}>{errors.island}</p>}
              </div>
              <button onClick={nextStep} className={styles.button}>Next</button>
            </div>
          );
      case 2:
        return (
            <div>
              <h2>Step 2: Project Details</h2>
              {renderServiceFields()}
              <div className={styles.navigationButtons}>
                <button onClick={prevStep} className={`${styles.button} ${styles.previous}`}>Previous</button>
                <button onClick={nextStep} className={styles.button}>Next</button>
              </div>
            </div>
          );
      case 3:
        return (
          <div>
            <h2>Step 3: Contact Information</h2>
            <div className={styles.summary}>
              <h3>Project Summary</h3>
              <p><strong>Service:</strong> {services.find(s => s.slug === formData.service)?.title}</p>
              <p><strong>Island:</strong> {formData.island}</p>
            </div>
            <h3 className={styles.finalHeading}>You will receive a free written estimate when we get onsite.</h3>
            <form action={(payload) => formAction(payload)}>
              {/* Hidden inputs to pass all form data to the server action */}
              {Object.entries(formData).map(([key, value]) => (
                <input type="hidden" key={key} name={key} value={String(value)} />
              ))}

              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} />
                {errors.name && <p className={styles.error}>{errors.name}</p>}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} />
                {errors.email && <p className={styles.error}>{errors.email}</p>}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone</label>
                <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} />
                {errors.phone && <p className={styles.error}>{errors.phone}</p>}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="address">Address</label>
                <input type="text" name="address" id="address" value={formData.address} onChange={handleChange} />
                {errors.address && <p className={styles.error}>{errors.address}</p>}
              </div>
              {state.message && !state.success && <p className={styles.error}>{state.message}</p>}
              <div className={styles.navigationButtons}>
                <button type="button" onClick={prevStep} className={`${styles.button} ${styles.previous}`}>Previous</button>
                <SubmitButton />
              </div>
            </form>
          </div>
        );
    case 4:
        return (
            <div className={styles.thankYouStep}>
                <h2>Thank You!</h2>
                <p>{state.message || "Your estimate has been submitted successfully. We will be in touch shortly."}</p>
            </div>
        )
      default:
        return null;
    }
  };

  const renderServiceFields = () => {
    const qualityOptions = [
        { id: 'builder', label: 'Builder', description: 'Standard, cost-effective finishes.' },
        { id: 'selective-grade', label: 'Selective-Grade', description: 'Upgraded materials and design.' },
        { id: 'high-end', label: 'High-End', description: 'High-end, custom, and premium features.' },
    ];

    const locationOptions = [
        { id: 'indoor', label: 'Indoor' },
        { id: 'outdoor', label: 'Outdoor' },
    ];

    switch (formData.service) {
    case 'new-construction':
        return (
            <div>
                <div className={styles.formGroup}>
                    <label htmlFor="newConstructionSize">Approximate Square Footage</label>
                    <input type="range" name="newConstructionSize" id="newConstructionSize" value={formData.newConstructionSize} onChange={handleChange} min="500" max="10000" step="100" />
                    <span>{formData.newConstructionSize} sq ft</span>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="newConstructionBedrooms">Number of Bedrooms</label>
                    <input type="range" name="newConstructionBedrooms" id="newConstructionBedrooms" value={formData.newConstructionBedrooms} onChange={handleChange} min="1" max="5" />
                    <span>{formData.newConstructionBedrooms}</span>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="newConstructionBathrooms">Number of Bathrooms</label>
                    <input type="range" name="newConstructionBathrooms" id="newConstructionBathrooms" value={formData.newConstructionBathrooms} onChange={handleChange} min="1" max="5" />
                    <span>{formData.newConstructionBathrooms}</span>
                </div>
                <div className={styles.formGroup}>
                    <label>Quality Grade</label>
                    <div className={styles.qualitySelection}>
                        {qualityOptions.map(option => (
                            <button 
                                type="button"
                                key={option.id} 
                                className={`${styles.qualityCard} ${formData.newConstructionQuality === option.id ? styles.selected : ''}`}
                                onClick={() => handleQualitySelection("newConstructionQuality", option.id)}
                            >
                                <h3>{option.label}</h3>
                                <p>{option.description}</p>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        );
        case 'home-remodeling':
            return (
                <div>
                    <div className={styles.formGroup}>
                        <label htmlFor="homeRemodelingSqft">Approximate Square Footage</label>
                        <input type="range" name="homeRemodelingSqft" id="homeRemodelingSqft" value={formData.homeRemodelingSqft} onChange={handleChange} min="100" max="5000" step="50"/>
                        <span>{formData.homeRemodelingSqft} sq ft</span>
                    </div>
                    <div className={styles.formGroup}>
                        <label>Quality Grade for Finishes</label>
                        <div className={styles.qualitySelection}>
                        {qualityOptions.map(option => (
                            <button 
                                type="button"
                                key={option.id} 
                                className={`${styles.qualityCard} ${formData.homeRemodelingQuality === option.id ? styles.selected : ''}`}
                                onClick={() => handleQualitySelection("homeRemodelingQuality", option.id)}
                            >
                                <h3>{option.label}</h3>
                                <p>{option.description}</p>
                            </button>
                        ))}
                    </div>
                    </div>
                </div>
            );
        case 'kitchen-remodeling':
            return (
            <div>
                <div className={styles.formGroup}>
                    <label htmlFor="kitchens">How many kitchens?</label>
                    <input type="range" name="kitchens" id="kitchens" value={formData.kitchens} onChange={handleChange} min="1" max="5" />
                    <span>{formData.kitchens}</span>
                </div>
                <div className={styles.formGroup}>
                    <label>Indoor or Outdoor?</label>
                    <div className={styles.locationSelection}>
                        {locationOptions.map(option => (
                            <button 
                                type="button"
                                key={option.id} 
                                className={`${styles.locationCard} ${formData.kitchenLocation === option.id ? styles.selected : ''}`}
                                onClick={() => handleLocationSelection('kitchenLocation', option.id)}
                            >
                                <span>{option.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <label>Quality Grade</label>
                    <div className={styles.qualitySelection}>
                        {qualityOptions.map(option => (
                            <button 
                                type="button"
                                key={option.id} 
                                className={`${styles.qualityCard} ${formData.kitchenQuality === option.id ? styles.selected : ''}`}
                                onClick={() => handleQualitySelection("kitchenQuality", option.id)}
                            >
                                <h3>{option.label}</h3>
                                <p>{option.description}</p>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            );
        case 'bathroom-remodeling':
            return (
            <div>
                <div className={styles.formGroup}>
                    <label htmlFor="bathrooms">How many bathrooms?</label>
                    <input type="range" name="bathrooms" id="bathrooms" value={formData.bathrooms} onChange={handleChange} min="1" max="5" />
                    <span>{formData.bathrooms}</span>
                </div>
                <div className={styles.formGroup}>
                    <label>Indoor or Outdoor?</label>
                    <div className={styles.locationSelection}>
                        {locationOptions.map(option => (
                            <button 
                                type="button"
                                key={option.id} 
                                className={`${styles.locationCard} ${formData.bathroomLocation === option.id ? styles.selected : ''}`}
                                onClick={() => handleLocationSelection('bathroomLocation', option.id)}
                            >
                                <span>{option.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
                <div className={styles.formGroup}>
                <label>Quality Grade</label>
                <div className={styles.qualitySelection}>
                        {qualityOptions.map(option => (
                            <button 
                                type="button"
                                key={option.id} 
                                className={`${styles.qualityCard} ${formData.bathroomQuality === option.id ? styles.selected : ''}`}
                                onClick={() => handleQualitySelection("bathroomQuality", option.id)}
                            >
                                <h3>{option.label}</h3>
                                <p>{option.description}</p>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            );
            case 'additions':
            return (
                <div>
                    <div className={styles.formGroup}>
                        <label htmlFor="additionsRooms">How many new rooms (excluding kitchens)?</label>
                        <input type="range" name="additionsRooms" id="additionsRooms" value={formData.additionsRooms} onChange={handleChange} min="1" max="5" />
                        <span>{formData.additionsRooms}</span>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="additionsKitchens">How many new kitchens?</label>
                        <input type="range" name="additionsKitchens" id="additionsKitchens" value={formData.additionsKitchens} onChange={handleChange} min="0" max="3"/>
                        <span>{formData.additionsKitchens}</span>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="additionsKitchenLocation">Are any of the new kitchens outdoors?</label>
                        <select name="additionsKitchenLocation" id="additionsKitchenLocation" value={formData.additionsKitchenLocation} onChange={handleChange}>
                            <option key="indoor" value="indoor">Indoor Only</option>
                            <option key="outdoor" value="outdoor">Outdoor Kitchen Included</option>
                        </select>
                    </div>
                    <div className={styles.formGroup}>
                        <label>Quality Grade for the Addition</label>
                        <div className={styles.qualitySelection}>
                        {qualityOptions.map(option => (
                            <button 
                                type="button"
                                key={option.id} 
                                className={`${styles.qualityCard} ${formData.additionsQuality === option.id ? styles.selected : ''}`}
                                onClick={() => handleQualitySelection("additionsQuality", option.id)}
                            >
                                <h3>{option.label}</h3>
                                <p>{option.description}</p>
                            </button>
                        ))}
                    </div>
                    </div>
                </div>
            );
        default:
            return <p>Please select a service to see more options.</p>;
        }
    };

  return (
    <div className={styles.estimator}>
        <div className={styles.progressBar}>
            <div className={styles.progress} style={{ width: `${(step / 4) * 100}%` }}></div>
        </div>
        <div className={styles.stepIndicator}>Step {step} of 4</div>
        {renderStep()}
    </div>
  );
};

export default CostEstimator;
