import { BlogPost } from "@/types/blog"
import Link from "next/link"

interface BlogItemProps {
  post: BlogPost
}

export default function BlogItem({ post }: BlogItemProps) {
  return (
    <div className="bg-white border border-gray-300 p-3 mb-4">
      <h3 className="text-sm font-bold mb-1">
        <Link href={`/article/${post.slug}`} className="vintage-link">
          {post.title}
        </Link>
      </h3>
      <div className="text-xs text-gray-600 italic mb-2">
        Posted: {post.date}
      </div>
      <div className="text-xs leading-relaxed mb-2.5 text-justify">
        {post.description}
      </div>
      <div className="text-xs text-right border-t border-dotted border-gray-300 pt-1">
        <Link href={`/article/${post.slug}`} className="vintage-link mx-1">
          Read More
        </Link>
      </div>
    </div>
  )
}
