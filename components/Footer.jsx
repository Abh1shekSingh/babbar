"use client"
import React from 'react'
import Animation from './Animation'
import { Manrope, Poppins } from 'next/font/google'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const poppins = Poppins({subsets:['latin'], weight:['700']})
const manrope = Manrope({subsets:['latin'], weight:'400'})
const Footer = () => {
  const heading = [...("Coding.")]
  const para = [...("Pellentesque egestas tortor ac risus scelerisque, in lacinia erat ullamcorper. Sed imperdiet est ut purus tincidunt viverra. Aliquam sit amet justo mauris. Fusce pellentesque aliquet magna id pulvinar. Praesent eget faucibus velit. ")]
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.from('#paraText', {
      scrollTrigger: {
        trigger: '#paraText',
        start: 'top center',
        end: 'bottom+=200px center',
        scrub: 1,
        markers: true
      },
      opacity: 0,
      duration: 1.5,
      stagger: {
        amount:0.8
      },
      ease: "cubic-bezier(0.85, 0, 0.15, 1)",
    })
  },[])
  return (
    <div className='mt-[-100svh]'>
        <div className='relative h-svh'></div>
        <section className='p-7 sm:p-24 sticky -bottom-80 min-h-[70vh] pt-14  w-full text-5xl flex items-start justify-start bg-accent-200'>
          <div className='flex flex-col gap-y-8'>
            <div>
              <h2 className={`${poppins.className} uppercase text-[40px] sm:text-7xl  xs:text-4xl duration-500 text-dark font-bold`}>
                <Animation word={heading} className = "coding" />
              </h2>
            </div>
            <div >
              <p className={`${manrope.className} tracking-loose text-xl md:text-4xl max-w-[44ch]`}>
                {
                  para.map((letter, index) => {
                    if(letter !== ' '){
                      return <span className='inline-flex overflow-hidden'>
                        <span id='paraText' className='relative'>{letter}</span>
                      </span>
                    }else {
                      return <span>&nbsp;</span>
                    }
                  })
                }
              </p>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Footer