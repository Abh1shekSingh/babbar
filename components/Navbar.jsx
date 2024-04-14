"use client"
import React, { useEffect, useRef } from 'react'
import logo from "../public/images/logo.svg"
import Image from 'next/image'
import Link from 'next/link'
import { FaLinkedin, FaGithubSquare, FaEnvelope } from "react-icons/fa";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Manrope, Sacramento } from 'next/font/google'
const whisper = Sacramento({subsets: ['latin'], weight:['400']})
const manrope = Manrope({subsets: ['latin'], weight:['400']})
const Navbar = () => {  
  const ref = useRef(null)
  useEffect(() => {
    const xTo = gsap.quickTo(ref.current, "x", {duration:1, ease:"elastic.out(1, 0.3)"})
    const yTo = gsap.quickTo(ref.current, "y", {duration:1, ease:"elastic.out(1, 0.3)"})
    const mouseMove = (e) => {
        const {clientX, clientY} = e;
        const {width, height, top, left} = ref.current.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        xTo(x);
        yTo(y);
    }
    const mouseLeave = () => {
        xTo(0);
        yTo(0);
    }
    ref.current.addEventListener('mousemove', mouseMove);
    ref.current.addEventListener('mouseleave', mouseLeave);

  }, [])

  useGSAP(() => {
    gsap.from("#nav", {y: -100, duration: 1.5, delay:1, ease: "expo.out"})
  },[])

  return (
    <nav id='nav' className='bg-[#F6F6F4] flex justify-between items-center p-7 xl:px-24 px-[2em] sm:px-[2em]'>
        <div ref={ref}>
          <h2 className={`${whisper.className} text-dark text-3xl xl:text-7xl`}>babbar</h2>
        </div>
        <div className={`text-dark flex  justify-end items-end gap-3 xl:gap-8 ${manrope.className}`}>
            <Link href='/' className='text-md sm:text-xl'>About</Link>
            <Link href='/' className='text-md sm:text-xl'>Experience</Link>
            <Link href='/' className='text-md sm:text-xl'>Socials</Link>
        </div>
    </nav>
  )
}

export default Navbar