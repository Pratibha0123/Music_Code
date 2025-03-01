import Choose from "@/components/Choose";
import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
// import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02">   
 {/* <h1 className="text-2xl text-center text-white">pratibha</h1> */}
 <HeroSection/>
 <FeaturedCourses/>
 <Choose/>
 {/* <Testimonials/> */}
</main>
  
  );
}
