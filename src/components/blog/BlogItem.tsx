import { BlogPost } from "@/types/blog"

interface BlogItemProps {
  post: BlogPost
}

export default function BlogItem({ post }: BlogItemProps) {
  return (
    <div className="bg-white border border-gray-300 p-3 mb-4">
      <h3 className="text-sm font-bold mb-1">
        <a href={`/blog/${post.slug}`} className="vintage-link">
          {post.title}
        </a>
      </h3>
      <div className="text-xs text-gray-600 italic mb-2">
        Posted: {post.date}
      </div>
      <div className="text-xs leading-relaxed mb-2.5 text-justify">
        {post.description}
      </div>
      <div className="text-xs text-right border-t border-dotted border-gray-300 pt-1">
        <a href={`/blog/${post.slug}`} className="vintage-link mx-1">Read More</a> | 
        <a href={`/blog/${post.slug}#comments`} className="vintage-link mx-1">Comments (0)</a>
      </div>
    </div>
  )
}
