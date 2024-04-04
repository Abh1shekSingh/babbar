"use client"
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { useEffect } from "react";
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
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
}
