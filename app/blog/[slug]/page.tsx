
import { supabase } from '@/lib/supabase'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import styles from './BlogPage.module.css'
import type { Metadata } from 'next'

export const revalidate = 60;

type Props = {
    params: { slug: string }
}

async function getPost(slug: string) {
    const { data: post, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .single()

    if (error) {
        console.error('Error fetching post:', error)
        if (error.code === 'PGRST116') {
            notFound()
        }
        // For other errors, you might want to throw the error or handle it differently
        throw new Error(`Failed to fetch post: ${error.message}`)
    }

    if (!post) {
        notFound()
    }

    return post
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

    return (
        <div className={styles.container}>
            <article className={styles.blogPost}>
            {post.image && (
                <div className={styles.imageContainer}>
                    <Image 
                        src={post.image} 
                        alt={post.title} 
                        width={800}
                        height={400}
                        style={{ objectFit: 'cover' }}
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
        </div>
    )
}
