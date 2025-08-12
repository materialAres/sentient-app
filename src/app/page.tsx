import BlogList from "@/components/blog/BlogList";
import WelcomeSection from "@/components/blog/WelcomeSection";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto bg-white">
      <Header />
      <main className="p-2.5">
        <WelcomeSection />
        <BlogList />
      </main>
      <Footer />
    </div>
  )
}