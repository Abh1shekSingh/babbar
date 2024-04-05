import React from 'react'
import { Saira } from 'next/font/google'
const SairaF = Saira({subsets: ['latin'], weight: ['700']})
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const About = () => {

  return (
    <div className='h-[100vh]'>
      <div className='ml-[5em]'>
        <span className='block overflow-hidden'>
          <span className={`block ${SairaF.className} uppercase text-[#3A3733] text-8xl`}>A little bit</span>
        </span>
        <span className='block overflow-hidden '>
          <span className={`block ${SairaF.className} uppercase text-[#3A3733] ml-5 text-8xl`}>About me.</span>
        </span>
      </div>
    </div>
  )
}

export default About