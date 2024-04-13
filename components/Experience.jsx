import React from 'react'
import Animation from './Animation'
import { Manrope, Sora } from 'next/font/google'
const montserrat = Sora({subsets: ['latin'], weights: [400, 500, 600, 700]})
const roboto = Manrope({subsets: ['latin'], weight: '400'})

const Experience = () => {
    const heading = [...("Experience.")];
  return (
    <section className='p-14 sm:p-24 bg-dark'>
        <div className='flex w-full flex-col gap-x-20 gap-y-2 lg:grid lg:grid-cols-12 xl:gap-y-3 2xl:gap-y-4'>
            <h2 className={`uppercase text-[40px] sm:text-7xl  xs:text-4xl duration-500 text-light font-bold ${montserrat.className}`}>
                <Animation word = {heading} className = "experience" />
            </h2>
            <p className={`col-span-12 max-w-[40ch] duration-500 text-xl xl:text-2xl pl-1 font-regular lg:col-span-6 text-light ${roboto.className}`}>
                I am a self-taught developer with a passion for learning and creating. I have experience in building web applications with React, Next.js, and Tailwind CSS. 
            </p>
        </div>
        <div className='mt-12 w-full'>
            <div className='mt-12 flex flex-col justify-between gap-y-16'>
                <div style="top:calc(20vh + 0em);margin-bottom:17.25em" className='sticky top-0 border-t border-t-light bg-dark px-2 '>
                    <div className='flex items-center gap-x-4 md:gap-x-6'>
                        <h3 class="py-7 text-left text-6xl font-bold text-light sm:py-6  sm:text-4xl md:py-5 md:text-text-6xl lg:text-7xl  3xl:py-6 ">Web Development</h3>
                    </div>
                </div>
            </div>
            <div className='relative flex min-h-[20vh] flex-col place-items-start gap-x-20 pb-12 lg:grid lg:grid-cols-12 '>
                <p class={`${roboto.className} col-span-12 max-w-[40ch] pt-2 text-2xl font-medium text-light md:text-h6 lg:col-span-6 2xl:text-h5`}>I create unique, custom-coded websites that are tailored to your brand. I focus on scalability, performance, accessibility, and engaging animations for a memorable experience.</p>
                {/* <div className='col-span-6 flex w-full flex-col gap-y-4 pt-8 text-h5 md:text-h4 lg:pt-0 2xl:text-h3'>
                    <span class="font-bold text-accent-500">CMS Integration</span>
                    <span class="font-bold text-accent-500">CMS Integration</span>
                    <span class="font-bold text-accent-500">CMS Integration</span>
                </div> */}
                {/* <span class="absolute bottom-0  -z-10 flex  w-full items-end justify-end  text-number font-extrabold leading-tighter text-secondary-300 opacity-50 ">01.</span> */}
            </div>
        </div>
    </section>
  )
}

export default Experience