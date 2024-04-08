import React from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
const Achievements = () => {

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
    <section id='achievements' className='z-2 min-h-screen top-full bg-slate-400 w-full flex items-center justify-center text-3xl'>Achievements</section>
  )
}

export default Achievements