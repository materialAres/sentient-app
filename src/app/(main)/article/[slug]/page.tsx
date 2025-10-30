// src/app/blog/[slug]/page.tsx
import BlogArticle from '@/components/blog/BlogArticle'
import { blogPosts } from '@/lib/blog-data'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

// Generate metadata for SEO
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const {slug} = await params;
  const post = blogPosts.find(post => post.slug === slug)
  
  if (!post) {
    return {
      title: 'Blog Post Not Found'
    }
  }

  return {
    title: `${post.title} - Shine.com`,
    description: post.description,
  }
}

// Generate static paths for all blog posts (optional - for better performance)
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ 
  params 
}: { 
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const post = blogPosts.find(post => post.slug === slug);
  
  if (!post) {
    notFound();
  }

  return <BlogArticle post={post} />
}
