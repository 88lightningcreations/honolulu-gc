
import { supabase } from '@/lib/supabase'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import styles from './BlogPage.module.css'
import type { Metadata } from 'next'
import InteractiveFAQ from '@/components/InteractiveFAQ'
import JsonLdFaq from '@/components/JsonLdFaq'

export const revalidate = 60;

type Props = {
    params: { slug: string }
}

// Define the shape of a single FAQ item
interface FAQ {
  question: string;
  answer: string;
}

// Define the shape of the post data, including the JSON column
interface Post {
    id: number;
    created_at: string;
    title: string;
    slug: string;
    content: string;
    image?: string;
    excerpt?: string;
    faq_json?: FAQ[]; // This column holds the array of FAQs
}

async function getPost(slug: string): Promise<Post> {
    const { data: post, error } = await supabase
        .from('blog_posts')
        .select('*') // Select all columns, including faq_json
        .eq('slug', slug)
        .single()

    if (error) {
        console.error('Error fetching post:', error)
        if (error.code === 'PGRST116') {
            notFound()
        }
        throw new Error(`Failed to fetch post: ${error.message}`)
    }

    if (!post) {
        notFound()
    }

    return post as Post
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = await getPost(params.slug)
    
    return {
        title: post.title,
        description: post.excerpt,
    }
}

export default async function BlogPostPage({ params }: Props) {
    const post = await getPost(params.slug)
    // Use the faq_json column for the FAQs, defaulting to an empty array
    const faqs = post.faq_json || []

    return (
        <div className={styles.container}>
            {faqs.length > 0 && <JsonLdFaq faqs={faqs} />}
            <article className={styles.blogPost}>
                {post.image && faqs.length === 0 && (
                    <div className={styles.imageContainer}>
                        <Image 
                            src={post.image} 
                            alt={post.title} 
                            width={800}
                            height={400}
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                    </div>
                )}
                <div className={styles.contentContainer}>
                    <h1 className={styles.title}>{post.title}</h1>
                    <div className={styles.content}>
                        <ReactMarkdown>{post.content || ''}</ReactMarkdown>
                    </div>
                </div>
            </article>
            
            {faqs.length > 0 && (
                <div className={styles.faqContainer}>
                    <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
                    <InteractiveFAQ faqs={faqs} />
                </div>
            )}
        </div>
    )
}
