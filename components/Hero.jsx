"use client"
import React from 'react'
import heroImage from "../public/hero.webp"
import Image from 'next/image'
import { Saira, Barlow } from 'next/font/google'
const SairaF = Saira({subsets: ['latin'], weight: ['700']})
const BarlowF = Barlow({subsets: ['latin'], weight: ['500']})
import gsap from "gsap"
import {useGSAP} from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const Hero = () => {

    const greetWord = [...("Hi There,")]
    const nameWord = [...("I'm Abhishek.")]


    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        gsap.to(".wrapper", {
            opacity:0, 
            y: -100,
            duration: 3,
            scrollTrigger: {
                trigger: ".wrapper",
                start: "bottom center+=100px",
                end: "bottom top",
                scrub: true,
            } 
        })
        gsap.from("#greeting", 
            {y: 150, duration: 1.5, ease: "expo.out", stagger: {amount: 0.8}}
        )
        gsap.from("#name", 
            {y: 150, duration: 1.5,delay:0.2 ,ease: "expo.out", stagger: {amount: 0.8}}
        )
        gsap.from("#subtext", 
            {y: 100, opacity:0, duration: 1.5,delay:0.8 ,ease: "expo.out",}
        )
        gsap.from("#hero_image", 
            {scale: 0, opacity:0, duration: 4,ease: "expo.out"}
        )
       
    }, [])

  return (
    <div className='fixed h-[100vh] w-full'>
        <div className='absolute  z-[0] w-[100%] sm:w-[50%] top-[30%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <Image id='hero_image' src={heroImage} alt='hero'/>
        </div>
        <div className='wrapper pl-[1em] absolute bottom-[12em] sm:bottom-0 sm:relative sm:flex sm:flex-col sm:justify-center pt-[2em] sm:items-center'>
            <div className={`text-[#3A3733] uppercase font-bold text-5xl xl:text-9xl lg:text-7xl sm:text-5xl  ${SairaF.className}`}>
                <div  className='flex '>
                    {greetWord.map((word, index) => {
                        if(word !== ' ') {
                            return <span className='block overflow-hidden'>
                                <span id='greeting' className='flex block tracking-tight'>{word}</span>
                            </span>
                        }else {
                            return <span className='ml-3 xl:ml-7 lg:ml-5 sm:ml-5 block overflow-hidden'>
                                <span id='greeting' className='flex block tracking-tight'>{word}</span>
                            </span>
                        }
                    })}
                </div>
                <div className='flex sm:ml-7'>
                    {nameWord.map((word, index) => {
                        if(word !== ' ') {
                            return <span className='block overflow-hidden'>
                                <span id='greeting' className='flex block tracking-tight stroked font-outline-4'>{word}</span>
                            </span>
                        }else {
                            return <span className='ml-3 xl:ml-7 lg:ml-5 sm:ml-5 block overflow-hidden'>
                                <span id='greeting' className='flex block tracking-tight'>{word}</span>
                            </span>
                        }
                    })}
                </div>
                
            </div>
            <div className='text-[#6b645c] sm:w-[35%] sm:text-center font-medium text-md xl:text-xl lg:text-lg sm:text-sm mt-2 sm:mt-7'>
                <p id='subtext' className={`${BarlowF.className}`}>A software developer engineer II @ Urban Company & developer who think ahead of the curve.</p>
            </div>
        </div>
    </div>
  )
}

export default Hero