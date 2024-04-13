import React from 'react'
import Image from 'next/image'
import circleSVG from '../public/images/Circle.svg'
import Animation from './Animation'
import { Manrope, Montserrat, Roboto, Sora } from 'next/font/google'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
const sora = Sora({subsets: ['latin'], weights: [400, 500, 600, 700]})
const manrope = Manrope({subsets: ['latin'], weight: '500'})
const Hero = () => {
  const greet = [...("Hi there")]
  const author = [...("I'm Abhishek")]
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.from(".subtext", {
      y: 120,
      opacity: 0,
      duration: 1.5,
      ease: 'expo.out',
    
    })

    gsap.to(".text_wrapper", {
      scrollTrigger: {
        trigger: ".text_wrapper",
        start: "center center",
        end: "center top",
        scrub: true,
      },
      y: -100,
      opacity:0,
      duration: 1.5,
      ease: "cubic-bezier(0.85, 0, 0.15, 1)",
    })
  },[])
  return (
    <section id='hero' className='bg-[#f6f6f4] mb-[-100svh] py-0'>
        <div className='p-7 sticky h-svh top-0 z-90 w-full text-5xl  flex items-end sm:items-center justify-center'>
            <Image className='absolute top-16 sm:top-0 w-7/8 sm:w-3/5 lg:w-2/5 z-0' src={circleSVG} alt='circle' width={400} height={400} />
            <div className='relative z-10 w-full'>
              <div className='text_wrapper flex flex-col justify-center items-start gap-y-3 relative bottom-24 sm:items-center sm:gap-y-8'>
                <h1 className={`relative flex w-full flex-col  whitespace-nowrap text-[40px] font-bold uppercase leading-tighter text-[#2d2926] duration-500 xs:text-lg sm:text-9xl ${sora.className}`}>
                  <span className='flex-col flex sm:pl-[13%] 2xl:pl-[16%] 4xl:pl-[21%]'>
                    <Animation word = {greet} className = "greet"/>
                  </span>
                  <span className='sm:pr-[13%] sm:text-right 2xl:pr-[16%] 4xl:pr-[21%]'>
                    <Animation word = {author} className = "author"/>
                  </span>
                </h1>
                <p className={`subtext max-w-[38ch] pl-1 text-start text-lg font-medium text-secondary-100 sm:pl-0 sm:text-center xl:text-h6 2xl:text-2xl opacity-60 ${manrope.className}`}>
                  A Software Engineer II @ Urban Company with a passion for building digital experiences.
                </p>
              </div>
            </div>
        </div>
        <div className='h-svh'></div>
    </section>
  )
}

export default Hero