import React from 'react'
import Animation from './Animation'
import { Manrope, Poppins } from 'next/font/google'
import Image from 'next/image'
import babbar from "../public/images/Babbar.png"
const sora = Poppins({subsets:['latin'], weight:['700']})
const manrope = Manrope({subsets:['latin'], weight:'400'})
const About = () => {
    const heading = [...("To Know Me.")]
  return (
    <section id='about' className='p-7 sm:p-24 w-full bg-dark z-2 min-h-screen rounded-b-3xl'>
        <div className='relative'>
            <h2 className={`mix-blend-exclusion uppercase text-[40px] sm:text-7xl  xs:text-4xl duration-500 text-light font-bold ${sora.className}`}>
                <Animation word={heading} className="about" />
            </h2>
            <div className='pointer-events-none relative z-0 mx-auto w-full overflow-hidden sm:max-w-sm  2xl:max-w-lg 3xl:max-w-xl'>
                <Image src={babbar} alt="author" width={500} height={500} className=' aspect-auto w-full rounded object-cover grayscale sm:mx-auto  2xl:rounded-2xl' />
                <div className=' absolute top-0 h-full w-full rounded bg-gradient-to-t from-dark to-transparent opacity-80 xl:opacity-75 2xl:rounded-2xl'></div>
            </div>
        </div>
        <p className={`${manrope.className} relative opacity-80 -mt-8 flex w-full items-end justify-end text-xl font-medium text-light sm:-mt-12 xl:text-3xl`}>
            <span className='max-w-[44ch]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut hendrerit nulla, sed fringilla purus. Aenean quis est eu lacus feugiat semper sed ut turpis. In nec nisl enim Cras mattis rutrum arcu, ut fringilla nibh mattis vitae. Pellentesque blandit bibendum tempus. Sed sit amet vestibulum massa, in fermentum odio</span>
        </p>
    </section>
  )
}

export default About