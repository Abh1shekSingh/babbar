import React from 'react'
import Animation from './Animation'
import Link from 'next/link'
import Image from 'next/image'
import leetcode from '../public/images/Leetcode-babbar.png'
import codeforces from "../public/images/Codeforce_babbar.png"
import kickstart from "../public/images/kickstart_babbar.png"
import { Montserrat,Sora, Roboto } from 'next/font/google'
const montserrat = Sora({subsets: ['latin'], weights: [400, 500, 600, 700]})
const roboto = Roboto({subsets: ['latin'], weight: '500'})

const About = () => {
  const work = [...("Showcase.")];
  return (
    <section id='about' className='p-7 sm:p-24 w-full z-2 min-h-screen bg-dark rounded-t-3xl '>
      <div>
        <h2 className={`uppercase text-[40px] sm:text-7xl  xs:text-4xl duration-500 text-light font-bold ${montserrat.className}`}>
          <Animation word = {work} className = "work" />
        </h2>
      </div>
      <div className='xl:gap-x-18 grid pt-12 grid-cols-1 gap-y-10 pb-20 md:grid-cols-12 md:gap-y-20 2xl:gap-x-20 3xl:gap-x-24'>
        <div className='col-span-7'>
          <Link href='/'>
            <div className='mb-4 overflow-hidden mx-auto rounded transition-all duration-300 hover:rounded-xl xl:mb-5 2xl:mb-6 3xl:mb-7 '>
              <Image src={leetcode} alt='leetcode'/>
            </div>
            <div className=' mt-3 flex flex-col justify-between  gap-y-4 @lg:flex-row'>
              <h3 className='w-fit text-light text-lg font-bold text-accent-300 2xl:text-3xl 3xl:text-3xl'>DTU FEC</h3>
            </div>
          </Link>
        </div>
        <div className='xl:col-span-5 col-span-7 xl:pt-[5rem]'>
          <Link href='/'>
            <div className='mb-4 overflow-hidden rounded transition-all duration-300 hover:rounded-xl xl:mb-5 2xl:mb-6 3xl:mb-7 '>
              <Image src={codeforces} alt='leetcode' layout='responsive'  />
            </div>
            <div className=' mt-3 flex flex-col justify-between  gap-y-4 @lg:flex-row'>
              <h3 className='w-fit text-light text-lg font-bold text-accent-300 2xl:text-3xl 3xl:text-3xl'>Cryptochat</h3>
            </div>
          </Link>
        </div>
        <div className='xl:col-span-5  xl:pt-[5rem]'>
          <Link href='/'>
            <div className='mb-4 overflow-hidden rounded transition-all duration-300 hover:rounded-xl xl:mb-5 2xl:mb-6 3xl:mb-7 '>
              <Image src={kickstart} alt='leetcode' layout='responsive'  />
            </div>
            <div className=' mt-3 flex flex-col justify-between  gap-y-4 @lg:flex-row'>
              <h3 className='w-fit text-light text-lg font-bold text-accent-300 2xl:text-3xl 3xl:text-3xl'>URL Shortner</h3>
            </div>
          </Link>
        </div>
        <div className='col-span-7 '>
          <Link href='/'>
            <div className='mb-4 overflow-hidden rounded transition-all duration-300 hover:rounded-xl xl:mb-5 2xl:mb-6 3xl:mb-7 '>
              <Image src={codeforces} alt='leetcode' layout='responsive' />
            </div>
            <div className=' mt-3 flex flex-col justify-between  gap-y-4 @lg:flex-row'>
              <h3 className='w-fit text-light text-lg font-bold text-accent-300 2xl:text-3xl 3xl:text-3xl'>Leetcode</h3>
            </div>
          </Link>
        </div>
        
      </div>
    </section>
  )
}

export default About