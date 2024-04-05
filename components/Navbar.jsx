"use client"
import React, { useEffect, useRef } from 'react'
import logo from "../public/logo.svg"
import Image from 'next/image'
import Link from 'next/link'
import { FaLinkedin, FaGithubSquare, FaEnvelope } from "react-icons/fa";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
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
    <nav id='nav' className=' flex justify-between items-center px-[2em] sm:px-[2em]'>
        <Image ref={ref} className='relative bottom-2 right-4 sm:bottom-0 sm:right-0 sm:w-[9em]' src={logo} alt='logo' width={100} height={100} />
        <div className='text-[#777777] flex justify-center items-center gap-8'>
            <Link href='/' className='text-xl sm:text-2xl'><FaLinkedin /></Link>
            <Link href='/' className='text-xl sm:text-2xl'><FaGithubSquare /></Link>
            <Link href='/' className='text-xl sm:text-2xl'><FaEnvelope /></Link>
        </div>
    </nav>
  )
}

export default Navbar