"use client"
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { useEffect } from "react";
import Achievements from "@/components/Experience";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import Experience from "@/components/Experience";
import Showcase from "@/components/Showcase";
import About from "@/components/About";

export default function Home() {
  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

 

  return (
    <>
      {/* <Loader /> */}
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <div className="w-full min-h-screen relative z-20">
          <Showcase />
          <Experience />  
          <About />
        </div>
        <Footer />
        <div className="mt-32 flex w-full flex-col px-6 sm:px-[4%] 3xl:px-[10%] justify-center items-center text-3xl">
          <p>Get Sex Soon</p>
        </div>
      </main>
    </>
  );
}

