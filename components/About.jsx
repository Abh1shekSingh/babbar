import React, { useEffect, useRef } from 'react'
import { Saira } from 'next/font/google'
const SairaF = Saira({subsets: ['latin'], weight: ['700']})
const About = () => {

  return (
    <div className='w-full h-[100vh] relative z-[1] rounded-t-3xl bg-[#080807] top-[100vh]'>
      <div className='ml-[5em]'>
        <span className='block overflow-hidden'>
          <span className={`block ${SairaF.className} uppercase text-[#d1d1c7] text-8xl`}>A little bit</span>
        </span>
        <span className='block overflow-hidden '>
          <span className={`block ${SairaF.className} uppercase text-[#d1d1c7] ml-5 text-8xl`}>About me.</span>
        </span>
      </div>
    </div>
  )
}

export default About