import { supabase } from '@/lib/supabase'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import styles from './ServiceDetail.module.css'
import CostEstimator from '@/components/CostEstimator'

export const revalidate = 60;

async function getService(slug: string) {
  const { data: service, error } = await supabase
    .from('services')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error) {
    console.error('Error fetching service:', error)
    notFound()
  }

  if (!service) {
    notFound()
  }

  return service
}

export default async function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = await getService(params.slug)

  return (
    <div className={styles.serviceDetail}>
      <div className={styles.mainContent}>
        <header className={styles.header}>
          <h1 className={styles.title}>{service.title}</h1>
          <p className={styles.subtitle}>{service.short_description}</p>
        </header>

        {service.images && (
          <div className={styles.imageGallery}>
            {service.images.map((image: string, index: number) => (
              <div key={index} className={styles.imageContainer}>
                <Image 
                  src={image} 
                  alt={`${service.title} image ${index + 1}`} 
                  width={500} 
                  height={300} 
                  style={{ objectFit: 'cover' }} 
                />
              </div>
            ))}
          </div>
        )}

        <main className={styles.content}>
          <ReactMarkdown>{service.long_description || ''}</ReactMarkdown>
        </main>
        
        <CostEstimator preselectedService={params.slug} />
      </div>
    </div>
  )
}
