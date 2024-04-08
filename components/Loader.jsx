import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { Montserrat } from 'next/font/google'
const montserrat = Montserrat({ subsets: ['latin'], weights: [700]})
import Animation from './Animation'

const Loader = () => {
  const author = [...("ABHISHEK BABBAR")]
  const copyright = [...("2024 PORTFOLIO") ]
  useEffect(() => {
    setTimeout(() => {
      gsap.to('.loader', {height: 0, borderBottomLeftRadius:'50%' , borderBottomRightRadius:"50%" , duration: 1, ease: "cubic-bezier(0.85, 0, 0.15, 1)"})
      gsap.to('.main', {opacity: 0, borderBottomLeftRadius:'50%' , borderBottomRightRadius:"50%",duration: 1, ease: "cubic-bezier(0.85, 0, 0.15, 1)", delay:.5})
    }, 2000)
  },[])

  
 
  
  return (
    <div className='z-30 sticky top-0 relative w-[100%] h-[100%]'>
      <div className='loader bottom-0 bg-dark w-[100%] h-screen flex flex-col justify-center items-center'>
        <h1 className={`text-light text-4xl flex flex-col justify-center items-center ${montserrat.className}`}>
          <Animation word = {author} className = "author" tag = "true" />
          <Animation word = {copyright} className = "copyright" tag = "true" />
        </h1>
      </div>
    </div>
  )
}

export default Loader