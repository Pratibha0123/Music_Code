import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import DiscoverSection from "@/components/DiscoverSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <DiscoverSection />
      <Testimonials />
    </main>
  );
}
