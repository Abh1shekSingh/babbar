"use client"
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { useEffect } from "react";
import Loader from "@/components/Loader";
import Experience from "@/components/Experience";
import Showcase from "@/components/Showcase";
import About from "@/components/About";
import Coding from "@/components/Coding";
import Footer from "@/components/Footer";

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
        <Coding />
      </main>
      <footer className="relative">
        
        <Footer />
      </footer>
    </>
  );
}

