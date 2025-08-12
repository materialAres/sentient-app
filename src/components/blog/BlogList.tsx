import { blogPosts } from "@/lib/blog-data";
import BlogItem from "./BlogItem";

export default function BlogList() {
  return (
    <div className="my-5">
      <h2 className="text-base text-red-800 font-bold mb-4 text-center">
        Recent Reflections
      </h2>
      <div className="space-y-4">
        {blogPosts.map((post) => (
          <BlogItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}
