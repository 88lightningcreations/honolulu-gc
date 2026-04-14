'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import styles from './BlogCarousel.module.css'
import Image from 'next/image'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  image: string | null
  slug: string
}

const mockPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Art of Kitchen Remodeling',
      excerpt: 'Discover the secrets to a successful kitchen remodel, from planning to execution. We cover everything you need to know to create the kitchen of your dreams.',
      image: '/kitchen-remodel-bg.jpg',
      slug: 'kitchen-remodeling-art',
    },
    {
      id: '2',
      title: 'Transforming Your Living Room Space',
      excerpt: 'A guide to creating a living room that is both stylish and functional. Learn how to maximize space, choose the right furniture, and create a cohesive design.',
      image: '/living-room-remodel-honolulu-general-contractor.webp',
      slug: 'living-room-transformation',
    },
    {
      id: '3',
      title: 'Building Your Dream Home from Scratch',
      excerpt: 'The ultimate guide to new home construction. We walk you through the entire process, from finding the perfect lot to the final walkthrough.',
      image: '/design-new-build-honolulu-general-contractor.webp',
      slug: 'dream-home-construction',
    },
  ];

const BlogCarousel = () => {
  const [posts, setPosts] = useState<BlogPost[]>(mockPosts)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
        try {
            const { data, error } = await supabase
              .from('blog_posts')
              .select('id, title, excerpt, image, slug')
              .eq('is_published', true)
              .order('created_at', { ascending: false });
      
          if (error) {
            console.error('Error fetching blog posts:', error);
            setPosts(mockPosts); // Fallback to mock data on error
          } else if (data && data.length > 0) {
            setPosts(data);
          } else {
            setPosts(mockPosts); // Fallback if no data is returned
          }
        } catch (error) {
            console.error('An unexpected error occurred:', error);
            setPosts(mockPosts); // Fallback on unexpected errors
        }
      };

    fetchPosts();
  }, [])

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    if (!isHovering && posts.length > 1) {
      timeoutRef.current = setTimeout(
        () =>
          setCurrentIndex((prevIndex) =>
            prevIndex === posts.length - 1 ? 0 : prevIndex + 1
          ),
        5000
      );
    }

    return () => {
      resetTimeout();
    };
  }, [currentIndex, isHovering, posts.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? posts.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.length)
  }

  if (posts.length === 0) {
    return (
        <section className={styles.carouselContainer}>
            <h2 className={styles.sectionTitle}>Latest From Our Blog</h2>
            <p>No blog posts available at the moment. Please check back later.</p>
        </section>
    )
  }

  return (
    <section className={styles.carouselContainer}>
      <h2 className={styles.sectionTitle}>Latest From Our Blog</h2>
      <div 
        className={styles.carouselWrapper}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className={styles.carousel}>
            <div className={styles.carouselInner} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {posts.map((post) => (
                <div key={post.id} className={styles.slide}>
                {post.image && (
                    <div className={styles.imageContainer}>
                        <Image
                        src={post.image}
                        alt={post.title}
                        layout="fill"
                        objectFit="cover"
                        />
                    </div>
                )}
                <div className={styles.slideContent}>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <Link href={`/blog/${post.slug}`} className={styles.readMore}>Read More</Link>
                </div>
                </div>
            ))}
            </div>
        </div>
        <button onClick={goToPrevious} className={`${styles.arrow} ${styles.leftArrow}`}>
            &#10094;
        </button>
        <button onClick={goToNext} className={`${styles.arrow} ${styles.rightArrow}`}>
            &#10095;
        </button>
      </div>
    </section>
  )
}

export default BlogCarousel
