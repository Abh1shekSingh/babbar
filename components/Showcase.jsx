"use client"
import React from 'react'
import Animation from './Animation'
import Link from 'next/link'
import Image from 'next/image'
import leetcode from '../public/images/Leetcode-babbar.webp'
import codeforces from "../public/images/Codeforce_babbar.webp"
import kickstart from "../public/images/kickstart_babbar.webp"
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Poppins, Manrope } from 'next/font/google'
const poppins = Poppins({subsets: ['latin'], weight: ['700']})
const manrope = Manrope({subsets: ['latin'], weight: '600'})

const Showcase = () => {
  const work = [...("Showcase.")];
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.from(".work", {
      y: 120,
      opacity: 0,
      duration: 1.5,
      ease: 'expo.out',
      stagger: {
        amount: 0.8
      },
      scrollTrigger: {
        trigger: ".work",
        start: "top-=200px center",
        end: "bottom+=200px center",
        scrub: true,
        once:true
      }
    })
  
  })
  return (
    <section id='showcase' className='p-7 sm:p-24 w-full z-2 min-h-screen bg-dark rounded-t-3xl '>
      <div>
        <h2 className={`uppercase text-[40px] sm:text-7xl  xs:text-4xl duration-500 text-light font-bold ${poppins.className}`}>
          <Animation word = {work} className = "work" />
        </h2>
      </div>
      <div className='xl:gap-x-18 grid pt-12 grid-cols-1 gap-y-10 pb-20 md:grid-cols-12 md:gap-y-20 2xl:gap-x-20 3xl:gap-x-24'>
        <div className='col-span-7'>
          <Link href='/'>
            <div className='mb-4 overflow-hidden mx-auto rounded transition-all duration-300 hover:rounded-xl xl:mb-5 2xl:mb-6 3xl:mb-7 '>
              <Image src={leetcode} alt='leetcode' loading='lazy' className='transition-all duration-500 hover:scale-110'/>
            </div>
            <div className=' mt-3 flex flex-col justify-between  gap-y-4 @lg:flex-row'>
              <h3 className={`w-fit text-light text-lg font-bold text-accent-300 2xl:text-3xl 3xl:text-3xl ${manrope.className}`}>DTU FEC</h3>
            </div>
          </Link>
        </div>
        <div className='xl:col-span-5 col-span-7 xl:pt-[5rem]'>
          <Link href='/'>
            <div className='mb-4 overflow-hidden rounded transition-all duration-300 hover:rounded-xl xl:mb-5 2xl:mb-6 3xl:mb-7 '>
              <Image src={codeforces} alt='leetcode' loading='lazy' className='transition-all duration-500 hover:scale-110' />
            </div>
            <div className=' mt-3 flex flex-col justify-between  gap-y-4 @lg:flex-row'>
              <h3 className={`w-fit text-light text-lg font-bold text-accent-300 2xl:text-3xl 3xl:text-3xl ${manrope.className}`}>Cryptochat</h3>
            </div>
          </Link>
        </div>
        <div className='xl:col-span-5  xl:pt-[5rem]'>
          <Link href='/'>
            <div className='mb-4 overflow-hidden rounded transition-all duration-300 hover:rounded-xl xl:mb-5 2xl:mb-6 3xl:mb-7 '>
              <Image src={kickstart} alt='leetcode' loading='lazy' className='transition-all duration-500 hover:scale-110' />
            </div>
            <div className=' mt-3 flex flex-col justify-between  gap-y-4 @lg:flex-row'>
              <h3 className={`w-fit text-light text-lg font-bold text-accent-300 2xl:text-3xl 3xl:text-3xl ${manrope.className}`}>URL Shortner</h3>
            </div>
          </Link>
        </div>
        <div className='col-span-7 '>
          <Link href='/'>
            <div className='mb-4 overflow-hidden rounded transition-all duration-300 hover:rounded-xl xl:mb-5 2xl:mb-6 3xl:mb-7 '>
              <Image src={codeforces} alt='leetcode' loading='lazy' className='transition-all duration-500 hover:scale-110' />
            </div>
            <div className=' mt-3 flex flex-col justify-between  gap-y-4 @lg:flex-row'>
              <h3 className={`w-fit text-light text-lg font-bold text-accent-300 2xl:text-3xl 3xl:text-3xl ${manrope.className}`}>Leetcode</h3>
            </div>
          </Link>
        </div>
        
      </div>
    </section>
  )
}

export default Showcase