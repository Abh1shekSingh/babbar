import React, { useEffect, useRef } from 'react'
import { Saira,Barlow } from 'next/font/google'
const SairaF = Saira({subsets: ['latin'], weight: ['700']})
const BarlowF = Barlow({subsets: ['latin'], weight: ['500']})
import heroImage from "../public/Babbar.jpg"
import Image from 'next/image'
const About = () => {
  const text1 = [...("A Little Bit")];
  const text2 = [...("About Me.")];
  const line1 = (`Empowering all-scale startups with custom web experiences that are memorable and drive success. With a passion for design and development, I take projects from ideation to launch, ensuring a seamless journey that leaves a lasting impact in the digital landscape.`).split();


  return (
    <section className='w-full p-7 xl:p-16 relative z-[1] rounded-t-3xl bg-[#080807] top-[90vh]'>
      <h2 className='uppercase mix-blend-exclusion leading-tighter mb-6 sm:-mb-8 z-30 relative text-5xl xl:text-8xl lg:text-6xl sm:text-5xl text-[#d1d1c7]'>
        <span className='flex'> 
          {
            text1.map((word, index) => {
              if(word !== ' ') {
                return <span className='block overflow-hidden'>
                  <span className={`block ${SairaF.className}  `}>{word}</span>
                </span>
              }else{
                return <span className='ml-3 xl:ml-7 lg:ml-5 sm:ml-5 block overflow-hidden'>
                  <span className={`block ${SairaF.className}  `}></span>
                </span>
              }
            })
          }
        </span>
        <span className='xl:pl-5 flex'> 
          {
            text2.map((word, index) => {
              if(word !== ' ') {
                return <span className='block overflow-hidden'>
                  <span className={`block ${SairaF.className}  `}>{word}</span>
                </span>
              }else{
                return <span className='ml-3 xl:ml-7 lg:ml-5 sm:ml-5 block overflow-hidden'>
                  <span className={`block ${SairaF.className}  `}></span>
                </span>
              }
            })
          }
        </span>
      </h2>

      <div className='relative z-0 mx-auto overflow-hidden w-[80vw] sm:max-w-sm xl:max-w-md 3xl:max-w-lg '>
        <Image className='aspect-auto w-full rounded object-cover grayscale sm:mx-auto 2xl:rounded-2xl' src={heroImage} alt='hero' />
        <div class=" absolute z-3 top-0 h-full w-full rounded bg-gradient-to-t from-[#080807] to-transparent opacity-80 xl:opacity-80 2xl:rounded-2xl"></div>
      </div>
      
      <p className='relative -mt-8 flex justify-end items-end text-2xl xl:text-3xl lg-text-xl sm:text-xl opacity-80'>
          <span className='flex max-w-[44ch]'>
            {
              line1.map((word, index) => {
                if(word !== ' ') {
                  return <span className='block overflow-hidden'>
                    <span className={`block ${BarlowF.className} text-[#d1d1c7]  `}>{word}</span>
                  </span>
                }else{
                  return <span className='ml-3 xl:ml-7 lg:ml-5 sm:ml-5 block overflow-hidden'>
                    <span className={`block ${BarlowF.className} text-[#d1d1c7]  `}></span>
                  </span>
                }
              })
            }
          </span>
      </p>
        
    </section>
  )
}

export default About