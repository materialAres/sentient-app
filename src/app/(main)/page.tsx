import BlogList from "@/components/blog/BlogList";
import WelcomeSection from "@/components/blog/WelcomeSection";

export default function HomePage() {
  return (
    <div className="bg-white">
      <main className="p-2.5">
        <WelcomeSection />
        <BlogList />
      </main>
    </div>
  );
}
