"use client"
import React from 'react'
import heroImage from "../public/hero.webp"
import Image from 'next/image'
import { Saira, Barlow } from 'next/font/google'
const SairaF = Saira({subsets: ['latin'], weight: ['700']})
const BarlowF = Barlow({subsets: ['latin'], weight: ['500']})
import gsap from "gsap"
import {useGSAP} from "@gsap/react";
const Hero = () => {

    const greetWord = [...("Hi There, I'm")]
    const nameWord = [...("Abhishek Babbar.")]


    useGSAP(() => {
        gsap.from("#greeting", 
            {y: 150, duration: 1.5, ease: "expo.out", stagger: {amount: 0.8}}
        )
        gsap.from("#name", 
            {y: 150, duration: 1.5,delay:0.2 ,ease: "expo.out", stagger: {amount: 0.8}}
        )
        gsap.from("#subtext", 
            {y: 100, opacity:0, duration: 1.5,delay:0.8 ,ease: "expo.out"}
        )
        gsap.from("#hero_image", 
            {scale: 0, opacity:0, duration: 4,ease: "expo.out"}
        )
    }, [])

  return (
    <div className='h-[90vh] w-full'>
        <div className='absolute z-[0] w-[100%] sm:w-[50%] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
            <Image id='hero_image'  src={heroImage} alt='hero'/>
        </div>
        <div className='pl-[1em] absolute bottom-12 sm:bottom-0 sm:relative sm:flex sm:flex-col sm:justify-center sm:pt-[5em] sm:items-center'>
            <div className={`text-[#3A3733] uppercase font-bold text-4xl xl:text-9xl lg:text-7xl sm:text-5xl ${SairaF.className}`}>
                <div className='flex'>
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
                <div className='flex'>
                    {nameWord.map((word, index) => {
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
                
            </div>
            <div className='text-[#777777] sm:w-[35%] sm:text-center font-medium text-sm xl:text-xl lg:text-lg sm:text-sm mt-2 sm:mt-7'>
                <p id='subtext' className={`${BarlowF.className}`}>A software developer engineer II @ Urban company & developer who think ahead of the curve.</p>
            </div>
        </div>
    </div>
  )
}

export default Hero