"use client"
import React from 'react'
import heroImage from "../public/hero.svg"
import Image from 'next/image'
import { Saira, Barlow } from 'next/font/google'
const FG = Saira({subsets: ['latin'], weight: ['700']})
const BarlowF = Barlow({subsets: ['latin'], weight: ['500']})
import gsap from "gsap"
import {useGSAP} from "@gsap/react";
const Hero = () => {

    useGSAP(() => {
        gsap.from("#greeting", 
            {y: 150, duration: 1.5, ease: "expo.out"}
        )
        gsap.from("#name", 
            {y: 150, duration: 1.5,delay:0.2 ,ease: "expo.out"}
        )
        gsap.from("#subtext", 
            {y: 100, opacity:0, duration: 1.5,delay:0.8 ,ease: "expo.out"}
        )
        gsap.from("#hero_image", 
            {scale: 0, opacity:0, duration: 1,ease: "expo.out"}
        )
    }, [])

  return (
    <div className='w-full h-full'>
        <div className='absolute z-[-1] w-[30em] sm:w-[50em] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
            <Image id='hero_image'  src={heroImage} alt='hero'/>
        </div>
        <div className='pl-[1em] absolute bottom-12 sm:bottom-0 sm:relative sm:flex sm:flex-col sm:justify-center sm:mt-[5em] sm:items-center'>
            <div className={`text-[#3A3733] uppercase text-4xl sm:text-9xl font-bold ${FG.className}`}>
                <span className='block overflow-hidden '>
                    <span id='greeting' className='block tracking-tight'>Hi There, I&apos;m</span>
                </span>
                <span className='block overflow-hidden'>
                    <span id='name' className='sm:ml-3 block tracking-tight'>Abhishek Babbar.</span>
                </span>
            </div>
            <div className='text-[#777777] w-[95%] sm:w-[35%] sm:text-center font-medium sm:text-2xl mt-2 sm:mt-7'>
                <p id='subtext' className={`${BarlowF.className}`}>A freelance frontend developer & web designer propelling startup visions to reality.</p>
            </div>
        </div>
    </div>
  )
}

export default Hero