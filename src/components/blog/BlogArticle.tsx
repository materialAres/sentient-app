import { BlogPost as BlogPostType } from '@/types/blog'
import Link from 'next/link'

interface BlogArticleProps {
  post: BlogPostType
}

export default function BlogArticle({ post }: BlogArticleProps) {
  if (!post || !post.content) {
    return <div className="text-center text-red-800">Post not found</div>
  }
  return (
    <div className="max-w-4xl mx-auto bg-white">
      {/* Blog Content */}
      <main className="p-4">
        {/* Breadcrumb */}
        <div className="mb-4">
          <Link href="/" className="vintage-link text-xs">Home</Link>
          <span className="text-xs mx-1">→</span>
          <span className="text-xs text-gray-600">Blog Post</span>
        </div>

        {/* Blog Post */}
        <article className="bg-white border border-gray-300 p-6">
          {/* Post Header */}
          <header className="border-b border-dotted border-gray-300 pb-4 mb-6">
            <h1 className="text-lg font-bold text-red-800 mb-2">
              {post.title}
            </h1>
            <div className="text-xs text-gray-600 italic">
              Posted on {post.date} by Sarah Moonwhisper
            </div>
          </header>

          {/* Post Content */}
          <div 
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />

          {/* Post Footer */}
          <footer className="mt-8 pt-4 border-t border-dotted border-gray-300">
            <div className="text-xs text-gray-600">
              <strong>Categories:</strong> Self-Care, Wellness, Meditation
            </div>
            <div className="text-xs text-gray-600 mt-1">
              <strong>Tags:</strong> mindfulness, peace, inner-light, wellness-journey
            </div>
          </footer>
        </article>

        {/* Navigation */}
        <nav className="mt-6 text-center">
          <Link href="/" className="vintage-button mr-4">
            ← Back to Home
          </Link>
        </nav>
      </main>
    </div>
  )
}