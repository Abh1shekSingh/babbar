import React from 'react'
import heroImage from "../public/hero.svg"
import Image from 'next/image'
import { Familjen_Grotesk } from 'next/font/google'
const FG = Familjen_Grotesk({subsets: ['latin'], weights: [400, 500, 600]})
const Hero = () => {
  return (
    <div className='w-full h-full'>
        <div className='absolute z-[-1] w-[30em] sm:w-[50em] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
            <Image  src={heroImage} alt='hero'/>
        </div>
        <div className={`text-[#3A3733] pl-[1em] absolute bottom-12 sm:bottom-0 sm:relative sm:flex sm:flex-col sm:justify-center sm:mt-[5em] sm:items-center ${FG.className}`}>
            <div className='uppercase text-4xl sm:text-9xl font-bold'>
                <h1>Hi There, I&apos;m</h1>
                <h1 className='sm:ml-3'>Abhishek Babbar</h1>
            </div>
            <div className='font-medium sm:text-2xl mt-2 sm:mt-7'>
                <p>A Software Engineer II @ Urban Company.</p>
            </div>
        </div>
    </div>
  )
}

export default Hero