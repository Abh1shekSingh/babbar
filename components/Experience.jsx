import React from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Image from 'next/image'
import leetcode from '../public/images/Leetcode-babbar.png'
import Animation from './Animation'
import { Manrope, Sora } from 'next/font/google'
import star from "../public/images/star.svg"
const sora = Sora({subsets: ['latin'], weights: [400, 500, 600, 700]})
const manrope = Manrope({subsets: ['latin'], weight: '400'})

const Experience = () => {
  const heading= [...("Experience.")]

    // gsap.registerPlugin(ScrollTrigger)
    // useGSAP(() => {
    //     gsap.to('#achievements', {
    //         scrollTrigger: {
    //         trigger: '#achievements',
    //         start: 'top center',
    //         end: 'bottom center',
    //         scrub: 1,
    //         markers: true
    //         },
    //         scale:.5,
    //         translateZ:10,
    //     })
    // }, [])
  return (
    <section id='achievements' className='p-7 sm:p-24 z-2 bg-dark min-h-screen w-full'>
        <div className='grid gap-x-32 grid-cols-1 md:grid-cols-12'>
          <h2 className={`sm:col-span-12 md:col-span-6 uppercase text-[40px] sm:text-7xl  xs:text-4xl duration-500 text-light font-bold ${sora.className}`}>
            <Animation word = {heading} className = "achievements" />
          </h2>
          <p className={`sm:col-span-12 md:col-span-6 text-light text-lg xl:text-4xl ${manrope.className}`}>Here's my journey in the field of software engineering.</p>
        </div>
        <div className='mt-12 w-full'>
          <div className='mt-12 flex flex-col justify-between gap-y-16'>
            <div id='one' className='sticky top-0 border-t border-t-light bg-dark px-2 '>
              <div className='flex items-center md:gap-x-4'>
                <h3 className={`py-7 text-left text-2xl font-bold text-light sm:py-6  sm:text-3xl md:py-5 md:text-4xl lg:text-5xl  3xl:py-6 ${sora.className}`}>Digital Register</h3>
              </div>
              <div className='relative flex min-h-[20vh] flex-col place-items-start gap-x-20 pb-12 lg:grid lg:grid-cols-12 '>
                <p className={`${manrope.className} col-span-12 max-w-[40ch] pt-2 text-light text-lg font-medium md:text-lg lg:col-span-6 2xl:text-xl`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut hendrerit nulla, sed fringilla purus. Aenean quis est eu lacus feugiat semper sed ut turpis. In nec nisl enim</p>
                <span className='absolute bottom-0 -z-10 flex  w-full items-end justify-end  text-9xl font-extrabold leading-tighter text-light opacity-50 '>01</span>
              </div>
            </div>
            <div id='two' className='sticky top-0 border-t border-t-light bg-dark px-2 '>
              <div className='flex items-center md:gap-x-4'>
                <h3 className={`py-7 text-left text-2xl font-bold text-light sm:py-6  sm:text-3xl md:py-5 md:text-4xl lg:text-5xl  3xl:py-6 ${sora.className}`}>365 Labs</h3>
              </div>
              <div className='relative flex min-h-[20vh] flex-col place-items-start gap-x-20 pb-12 lg:grid lg:grid-cols-12 '>
                <p className={`${manrope.className} col-span-12 max-w-[40ch] pt-2 text-light text-lg font-medium md:text-lg lg:col-span-6 2xl:text-xl`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut hendrerit nulla, sed fringilla purus. Aenean quis est eu lacus feugiat semper sed ut turpis. In nec nisl enim</p>
                <span className='absolute bottom-0 -z-10 flex  w-full items-end justify-end  text-9xl font-extrabold leading-tighter text-light opacity-50 '>02</span>
              </div>
            </div>
            <div id='three' className='sticky top-0 border-t border-t-light bg-dark px-2 '>
              <div className='flex items-center md:gap-x-4'>
                <h3 className={`py-7 text-left text-2xl font-bold text-light sm:py-6  sm:text-3xl md:py-5 md:text-4xl lg:text-5xl  3xl:py-6 ${sora.className}`}>Urban Company</h3>
              </div>
              <div className='relative flex min-h-[20vh] flex-col place-items-start gap-x-20 pb-12 lg:grid lg:grid-cols-12 '>
                <p className={`${manrope.className} col-span-12 max-w-[40ch] pt-2 text-light text-lg font-medium md:text-lg lg:col-span-6 2xl:text-xl`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut hendrerit nulla, sed fringilla purus. Aenean quis est eu lacus feugiat semper sed ut turpis. In nec nisl enim</p>
                <span className='absolute bottom-0 -z-10 flex  w-full items-end justify-end  text-9xl font-extrabold leading-tighter text-light opacity-50 '>03</span>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Experience