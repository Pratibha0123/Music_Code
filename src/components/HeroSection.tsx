import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="h-[40rem] md:h-[50rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 select-none">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 tracking-tight text-balance">
          Master the art of music
        </h1>
        <p className="mt-6 font-normal text-base md:text-xl text-neutral-300 max-w-lg mx-auto leading-relaxed text-balance">
          Dive into our comprehensive music courses and transform your musical
          journey today. Whether you're a beginner or looking to refine your
          skills, join us to unlock your true potential.
        </p>
        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center items-center">
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 font-semibold"
            >
              Start Learning
            </Button>
          </Link>
          <Link href={"/contact"}>
            <button className="px-8 py-3 rounded-full border border-neutral-700 text-neutral-300 hover:bg-neutral-800 transition duration-300 font-medium text-lg">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
      <div className="absolute inset-0 bg-black/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] -z-10" />
    </div>
  );
}

export default HeroSection;