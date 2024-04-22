"use client"
import React from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Image from 'next/image'
import digitalRegister from '../public/images/DR.webp'
import labs365 from '../public/images/365.webp'
import UC from "../public/images/UC.webp"
import Animation from './Animation'
import { Manrope, Poppins } from 'next/font/google'
const poppins = Poppins({subsets: ['latin'], weight: ['700']})
const manrope = Manrope({subsets: ['latin'], weight: '400'})

const Experience = () => {
  const heading= [...("Experience.")]

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.from(".experience", {
      y: 120,
      opacity: 0,
      duration: 1.5,
      ease: 'expo.out',
      stagger: {
        amount: 0.8
      },
      scrollTrigger: {
        trigger: ".experience",
        start: "top-=200px center",
        end: "bottom+=200px center",
        scrub: true,
        once:true
      }
    })
    gsap.from(".subheading", {
      y: 120,
      opacity: 0,
      duration: 1.5,
      ease: 'expo.out',
      stagger: {
        amount: 0.8
      },
      scrollTrigger: {
        trigger: ".subheading",
        start: "top-=200px center",
        end: "bottom+=200px center",
        scrub: true,
        once:true, 
      }
    })
    

  })
  return (
    <section id='experience' className='p-7 sm:p-24 z-2 bg-dark min-h-screen w-full'>
        <div className='grid gap-x-32 grid-cols-1 md:grid-cols-12'>
          <h2 className={`sm:col-span-12 md:col-span-6 uppercase text-[40px] sm:text-7xl  xs:text-4xl duration-500 text-light font-bold ${poppins.className}`}>
            <Animation word = {heading} className = "experience" isScrollAnimation = "true" />
          </h2>
          <p className={`subheading sm:col-span-12 md:col-span-6 text-light text-lg xl:text-4xl opacity-80 ${manrope.className}`}>Here's my journey in the field of software engineering.</p>
        </div>
        <div className='mt-12 w-full'>
          <div className='mt-12 flex flex-col justify-between gap-y-16'>
            <div id='one' className='sticky top-0 border-t border-t-light bg-dark px-2 '>
              <div className='flex items-center gap-x-4 md:gap-x-6'>
                <Image src={digitalRegister} alt='Abhishek Babbar was SDE intern at Digital Register' className='h-6 w-6 sm:h-7 sm:w-7 2xl:h-8 2xl:w-8' />
                <h3 className={`py-7 text-left text-2xl font-bold text-light sm:py-6  sm:text-3xl md:py-5 md:text-4xl lg:text-5xl  3xl:py-6 ${poppins.className}`}>Digital Register</h3>
              </div>
              <div className='relative flex min-h-[20vh] flex-col place-items-start gap-x-20 pb-12 lg:grid lg:grid-cols-12 '>
                <p className={`${manrope.className} opacity-80 col-span-12 max-w-[40ch] pt-2 text-light text-lg font-medium md:text-lg lg:col-span-6 2xl:text-xl`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut hendrerit nulla, sed fringilla purus. Aenean quis est eu lacus feugiat semper sed ut turpis. In nec nisl enim</p>
                <span className='absolute bottom-0 -z-10 flex  w-full items-end justify-end  text-9xl font-extrabold leading-tighter text-light opacity-50 '>01</span>
              </div>
            </div>
            <div id='two' className='sticky top-0 border-t border-t-light bg-dark px-2 '>
              <div className='flex items-center gap-x-4 md:gap-x-6'>
                <Image src={labs365} alt='Abhishek Babbar was SDE intern at 365 Labs' className='h-6 w-6 sm:h-7 sm:w-7 2xl:h-8 2xl:w-8' />
                <h3 className={`py-7 text-left text-2xl font-bold text-light sm:py-6  sm:text-3xl md:py-5 md:text-4xl lg:text-5xl  3xl:py-6 ${poppins.className}`}>365 Labs</h3>
              </div>
              <div className='relative flex min-h-[20vh] flex-col place-items-start gap-x-20 pb-12 lg:grid lg:grid-cols-12 '>
                <p className={`${manrope.className} opacity-80 col-span-12 max-w-[40ch] pt-2 text-light text-lg font-medium md:text-lg lg:col-span-6 2xl:text-xl`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut hendrerit nulla, sed fringilla purus. Aenean quis est eu lacus feugiat semper sed ut turpis. In nec nisl enim</p>
                <span className='absolute bottom-0 -z-10 flex  w-full items-end justify-end  text-9xl font-extrabold leading-tighter text-light opacity-50 '>02</span>
              </div>
            </div>
            <div id='three' className='sticky top-0 border-t border-t-light bg-dark px-2 '>
              <div className='flex items-center gap-x-4 md:gap-x-6'>
              <Image src={UC} alt='Abhishek Babbar was SDE intern at 365 Labs' className='h-6 w-6 sm:h-7 sm:w-7 2xl:h-8 2xl:w-8' />
                <h3 className={`py-7 text-left text-2xl font-bold text-light sm:py-6  sm:text-3xl md:py-5 md:text-4xl lg:text-5xl  3xl:py-6 ${poppins.className}`}>Urban Company</h3>
              </div>
              <div className='relative flex min-h-[20vh] flex-col place-items-start gap-x-20 pb-12 lg:grid lg:grid-cols-12 '>
                <p className={`${manrope.className} opacity-80 col-span-12 max-w-[40ch] pt-2 text-light text-lg font-medium md:text-lg lg:col-span-6 2xl:text-xl`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut hendrerit nulla, sed fringilla purus. Aenean quis est eu lacus feugiat semper sed ut turpis. In nec nisl enim</p>
                <span className='absolute bottom-0 -z-10 flex  w-full items-end justify-end  text-9xl font-extrabold leading-tighter text-light opacity-50 '>03</span>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Experience