"use client"
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { useEffect } from "react";
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import Experience from "@/components/Experience";

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
          <About />
          {/* <Experience />   */}
          <Achievements />  
        </div>
        <Footer />
        <div className="mt-32 flex w-full flex-col px-6 sm:px-[4%] 3xl:px-[10%] justify-center items-center text-3xl">
          <p>Get Sex Soon</p>
        </div>
      </main>
    </>
  );
}

