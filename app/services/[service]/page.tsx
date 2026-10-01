
"use client";

import { useParams } from 'next/navigation';
import { services, Service } from '@/app/lib/services';
import styles from './ServicePage.module.css';
import Image from 'next/image';
import InteractiveFAQ from '@/components/InteractiveFAQ';
import JsonLdFaq from '@/components/JsonLdFaq';

const ServicePage = () => {
  const params = useParams();
  const serviceSlug = params.service as string;
  const service: Service | undefined = services.find(s => s.slug === serviceSlug);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className={styles.container}>
      <JsonLdFaq faqs={service.faqs} />
      <div className={styles.imageContainer}>
        <Image src={service.image} alt={service.title} layout="fill" objectFit="cover" />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>{service.title}</h1>
        <p className={styles.description}>{service.description}</p>
      </div>
      {service.faqs && service.faqs.length > 0 && (
        <div className={styles.faqContainer}>
          <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
          <InteractiveFAQ faqs={service.faqs} />
        </div>
      )}
    </div>
  );
};

export default ServicePage;
