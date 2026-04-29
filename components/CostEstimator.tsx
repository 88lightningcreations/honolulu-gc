'use client'

import React, { useState, useTransition } from 'react';
import styles from './CostEstimator.module.css';
import { services } from '../lib/services';
import { calculateEstimate, islands } from '../lib/pricing';
import { submitEstimate } from '../app/actions';

const CostEstimator = ({ preselectedService }: { preselectedService?: string }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<any>({
    service: preselectedService || '',
    island: '',
    kitchens: 1,
    kitchenLocation: 'indoor',
    kitchenQuality: 'builder',
    bathrooms: 1,
    bathroomLocation: 'indoor',
    bathroomQuality: 'builder',
    stormDamageRooms: 1,
    stormDamageCompleteReno: 'no',
    stormDamageLocation: 'indoor',
    stormDamageQuality: 'builder',
    houseMovingSameLot: 'yes',
    houseMovingDistance: 0,
    houseMovingSize: 1000,
    additionsRooms: 1,
    additionsKitchens: 0,
    additionsKitchenLocation: 'indoor',
    additionsQuality: 'builder',
    newConstructionSize: 2000,
    newConstructionBedrooms: 3,
    newConstructionBathrooms: 2,
    newConstructionQuality: 'builder',
    homeRemodelingRooms: 1,
    homeRemodelingQuality: 'builder',
    pestRepairRooms: 1,
    pestRepairQuality: 'builder',
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const [errors, setErrors] = useState<any>({});
  const [estimate, setEstimate] = useState<[number, number]>([0, 0]);
  const [isPending, startTransition] = useTransition();
  const [submissionResult, setSubmissionResult] = useState<{ success: boolean; message: string } | null>(null);

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
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const validateStep = () => {
    const newErrors: any = {};
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
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep()) return;

    startTransition(async () => {
        const result = await submitEstimate(formData);
        setSubmissionResult(result);
        if (result.success) {
            setStep(4); // Move to success step
        }
    });
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
            <div>
              <h2>Step 1: Select Your Service and Location</h2>
              <div className={styles.formGroup}>
                <label htmlFor="service">Service</label>
                <select name="service" id="service" value={formData.service} onChange={handleChange} disabled={!!preselectedService}>
                  <option value="">Select a service</option>
                  {services.map(service => (
                    <option key={service.slug} value={service.slug}>{service.title}</option>
                  ))}
                </select>
                {errors.service && <p className={styles.error}>{errors.service}</p>}
              </div>
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
                <button onClick={prevStep} className={styles.button}>Previous</button>
                <button onClick={nextStep} className={styles.button}>Next</button>
              </div>
            </div>
          );
      case 3:
        return (
          <div>
            <h2>Step 3: Contact Information and Estimate</h2>
            <div className={styles.summary}>
              <h3>Project Summary</h3>
              <p><strong>Service:</strong> {services.find(s => s.slug === formData.service)?.title}</p>
              <p><strong>Island:</strong> {formData.island}</p>
              <h3>Estimated Cost: ${estimate[0].toLocaleString()} - ${estimate[1].toLocaleString()}</h3>
            </div>
            <form onSubmit={handleSubmit}>
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
              {submissionResult && !submissionResult.success && (
                <p className={styles.error}>{submissionResult.message}</p>
              )}
              <div className={styles.navigationButtons}>
                <button type="button" onClick={prevStep} className={styles.button} disabled={isPending}>Previous</button>
                <button type="submit" className={styles.button} disabled={isPending}>
                  {isPending ? 'Submitting...' : 'Submit Estimate'}
                </button>
              </div>
            </form>
          </div>
        );
    case 4:
        return (
            <div className={styles.thankYouStep}>
                <h2>Thank You!</h2>
                <p>{submissionResult?.message || "Your estimate has been submitted successfully. We will be in touch shortly."}</p>
            </div>
        )
      default:
        return null;
    }
  };

    const renderServiceFields = () => {
        switch (formData.service) {
        case 'new-construction':
            return (
                <div>
                    <div className={styles.formGroup}>
                        <label htmlFor="newConstructionSize">Approximate Square Footage</label>
                        <input type="number" name="newConstructionSize" id="newConstructionSize" value={formData.newConstructionSize} onChange={handleChange} min="500" />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="newConstructionBedrooms">Number of Bedrooms</label>
                        <input type="number" name="newConstructionBedrooms" id="newConstructionBedrooms" value={formData.newConstructionBedrooms} onChange={handleChange} min="1" />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="newConstructionBathrooms">Number of Bathrooms</label>
                        <input type="number" name="newConstructionBathrooms" id="newConstructionBathrooms" value={formData.newConstructionBathrooms} onChange={handleChange} min="1" />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="newConstructionQuality">Quality Grade</label>
                        <select name="newConstructionQuality" id="newConstructionQuality" value={formData.newConstructionQuality} onChange={handleChange}>
                            <option key="builder" value="builder">Builder Grade - Standard, cost-effective finishes.</option>
                            <option key="mid" value="mid">Mid-Tier - Upgraded materials and design.</option>
                            <option key="luxury" value="luxury">Luxury - High-end, custom, and premium features.</option>
                        </select>
                    </div>
                </div>
            );
        case 'home-remodeling':
            return (
                <div>
                    <div className={styles.formGroup}>
                        <label htmlFor="homeRemodelingRooms">How many rooms are being remodeled?</label>
                        <input type="number" name="homeRemodelingRooms" id="homeRemodelingRooms" value={formData.homeRemodelingRooms} onChange={handleChange} min="1" />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="homeRemodelingQuality">Quality Grade for Finishes</label>
                        <select name="homeRemodelingQuality" id="homeRemodelingQuality" value={formData.homeRemodelingQuality} onChange={handleChange}>
                            <option key="builder" value="builder">Builder Grade - Cosmetic updates, basic materials.</option>
                            <option key="mid" value="mid">Mid-Tier - Significant updates, better materials.</option>
                            <option key="luxury" value="luxury">Luxury - Complete gut and custom, high-end remodel.</option>
                        </select>
                    </div>
                </div>
            );
        case 'pest-repair':
            return (
                <div>
                    <div className={styles.formGroup}>
                        <label htmlFor="pestRepairRooms">How many rooms show signs of pest damage?</label>
                        <input type="number" name="pestRepairRooms" id="pestRepairRooms" value={formData.pestRepairRooms} onChange={handleChange} min="1" />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="pestRepairQuality">Quality of Restoration</label>
                        <select name="pestRepairQuality" id="pestRepairQuality" value={formData.pestRepairQuality} onChange={handleChange}>
                            <option key="builder" value="builder">Builder Grade - Basic structural repair and paint.</option>
                            <option key="mid" value="mid">Mid-Tier - Repair with better, pest-resistant materials.</option>
                            <option key="luxury" value="luxury">Luxury - Full restoration with high-end, durable finishes.</option>
                        </select>
                    </div>
                </div>
            );
        case 'kitchen-remodeling':
            return (
            <div>
                <div className={styles.formGroup}>
                <label htmlFor="kitchens">How many kitchens?</label>
                <input type="number" name="kitchens" id="kitchens" value={formData.kitchens} onChange={handleChange} min="1" />
                </div>
                <div className={styles.formGroup}>
                <label htmlFor="kitchenLocation">Indoor or Outdoor?</label>
                <select name="kitchenLocation" id="kitchenLocation" value={formData.kitchenLocation} onChange={handleChange}>
                    <option key="indoor" value="indoor">Indoor</option>
                    <option key="outdoor" value="outdoor">Outdoor</option>
                    <option key="both" value="both">Both</option>
                </select>
                </div>
                <div className={styles.formGroup}>
                <label htmlFor="kitchenQuality">Quality Grade</label>
                <select name="kitchenQuality" id="kitchenQuality" value={formData.kitchenQuality} onChange={handleChange}>
                    <option key="builder" value="builder">Builder Grade - Basic, functional finishes.</option>
                    <option key="mid" value="mid">Mid-Tier - Upgraded appliances and finishes.</option>
                    <option key="luxury" value="luxury">Luxury - High-end, custom, and smart features.</option>
                </select>
                </div>
            </div>
            );
        case 'bathroom-remodeling':
            return (
            <div>
                <div className={styles.formGroup}>
                <label htmlFor="bathrooms">How many bathrooms?</label>
                <input type="number" name="bathrooms" id="bathrooms" value={formData.bathrooms} onChange={handleChange} min="1" />
                </div>
                <div className={styles.formGroup}>
                <label htmlFor="bathroomLocation">Indoor or Outdoor?</label>
                <select name="bathroomLocation" id="bathroomLocation" value={formData.bathroomLocation} onChange={handleChange}>
                    <option key="indoor" value="indoor">Indoor</option>
                    <option key="outdoor" value="outdoor">Outdoor</option>
                    <option key="both" value="both">Both</option>
                </select>
                </div>
                <div className={styles.formGroup}>
                <label htmlFor="bathroomQuality">Quality Grade</label>
                <select name="bathroomQuality" id="bathroomQuality" value={formData.bathroomQuality} onChange={handleChange}>
                    <option key="builder" value="builder">Builder Grade - Basic, functional finishes.</option>
                    <option key="mid" value="mid">Mid-Tier - Upgraded fixtures and materials.</option>
                    <option key="luxury" value="luxury">Luxury - Spa-like features, high-end materials.</option>
                </select>
                </div>
            </div>
            );
            case 'storm-damage-repair':
            return (
                <div>
                <div className={styles.formGroup}>
                    <label htmlFor="stormDamageRooms">How many rooms?</label>
                    <input type="number" name="stormDamageRooms" id="stormDamageRooms" value={formData.stormDamageRooms} onChange={handleChange} min="1" />
                </div>
                <div className={styles.formGroup}>
                    <label>Is this a complete renovation of the affected area?</label>
                    <input key="yes" type="radio" id="yes" name="stormDamageCompleteReno" value="yes" onChange={handleChange} checked={formData.stormDamageCompleteReno === 'yes'} />
                    <label htmlFor="yes">Yes</label>
                    <input key="no" type="radio" id="no" name="stormDamageCompleteReno" value="no" onChange={handleChange} checked={formData.stormDamageCompleteReno === 'no'}/>
                    <label htmlFor="no">No</label>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="stormDamageLocation">Is the primary damage to an indoor or outdoor area?</label>
                    <select name="stormDamageLocation" id="stormDamageLocation" value={formData.stormDamageLocation} onChange={handleChange}>
                    <option key="indoor" value="indoor">Indoor</option>
                    <option key="outdoor" value="outdoor">Outdoor</option>
                    <option key="both" value="both">Both</option>
                    </select>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="stormDamageQuality">Quality Grade of Finishes</label>
                    <select name="stormDamageQuality" id="stormDamageQuality" value={formData.stormDamageQuality} onChange={handleChange}>
                        <option key="builder" value="builder">Builder Grade - Matching existing basic finishes.</option>
                        <option key="mid" value="mid">Mid-Tier - Upgraded, durable materials.</option>
                        <option key="luxury" value="luxury">Luxury - High-end, custom restoration.</option>
                    </select>
                </div>
                </div>
            );
            case 'house-moving':
            return (
                <div>
                <div className={styles.formGroup}>
                    <label>Is the house staying on the same lot?</label>
                    <input key="yes" type="radio" id="yes" name="houseMovingSameLot" value="yes" onChange={handleChange} checked={formData.houseMovingSameLot === 'yes'} />
                    <label htmlFor="yes">Yes</label>
                    <input key="no" type="radio" id="no" name="houseMovingSameLot" value="no" onChange={handleChange} checked={formData.houseMovingSameLot === 'no'}/>
                    <label htmlFor="no">No</label>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="houseMovingDistance">Distance to new lot (in miles)</label>
                    <input type="number" name="houseMovingDistance" id="houseMovingDistance" value={formData.houseMovingDistance} onChange={handleChange} min="0" disabled={formData.houseMovingSameLot === 'yes'}/>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="houseMovingSize">Size of house (in sq ft)</label>
                    <input type="number" name="houseMovingSize" id="houseMovingSize" value={formData.houseMovingSize} onChange={handleChange} min="0" />
                </div>
                </div>
            );
            case 'additions':
            return (
                <div>
                <div className={styles.formGroup}>
                    <label htmlFor="additionsRooms">How many new rooms (excluding kitchens)?</label>
                    <input type="number" name="additionsRooms" id="additionsRooms" value={formData.additionsRooms} onChange={handleChange} min="1" />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="additionsKitchens">How many new kitchens?</label>
                    <input type="number" name="additionsKitchens" id="additionsKitchens" value={formData.additionsKitchens} onChange={handleChange} min="0" />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="additionsKitchenLocation">Are any of the new kitchens outdoors?</label>
                    <select name="additionsKitchenLocation" id="additionsKitchenLocation" value={formData.additionsKitchenLocation} onChange={handleChange}>
                    <option key="indoor" value="indoor">Indoor Only</option>
                    <option key="outdoor" value="outdoor">Outdoor Kitchen Included</option>
                    </select>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="additionsQuality">Quality Grade for the Addition</label>
                    <select name="additionsQuality" id="additionsQuality" value={formData.additionsQuality} onChange={handleChange}>
                        <option key="builder" value="builder">Builder Grade - Standard, functional space.</option>
                        <option key="mid" value="mid">Mid-Tier - Enhanced materials and finishes.</option>
                        <option key="luxury" value="luxury">Luxury - High-end, custom-designed space.</option>
                    </select>
                </div>
                </div>
            );
        default:
            return <p>Please select a service to see more options.</p>;
        }
    };

  return (
    <div className={styles.estimator}>
      <div className={styles.stepIndicator}>Step {step} of 3</div>
        {renderStep()}
    </div>
  );
};

export default CostEstimator;
