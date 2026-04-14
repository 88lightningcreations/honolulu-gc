
import { supabase } from '@/lib/supabase'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import styles from './BlogPage.module.css'

export const revalidate = 60; // Revalidate every 60 seconds

async function getPost(slug: string) {
  const { data: post, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error) {
    console.error('Error fetching post:', error)
    notFound()
  }

  if (!post) {
    notFound()
  }

  return post
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)

  return (
    <div className={styles.container}>
        <article className={styles.blogPost}>
        {post.image && (
            <div className={styles.imageContainer}>
                <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill
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
    </div>
  )
}
