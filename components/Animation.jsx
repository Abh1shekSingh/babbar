import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Animation = (props) => {
    const ref = `.${props.className}`
    useGSAP(() => {
        gsap.from(ref, {
            y: 120,
            duration: 1,
            stagger: {
                amount: 0.8,
            },
            ease: 'expo.out',
        });
    }, []);

    if(props.tag === "true") {
      useGSAP(() => {
        gsap.to(ref, {
            y: -100,
            duration: 1.5,
            ease: "cubic-bezier(0.85, 0, 0.15, 1)",
            delay: 2,
        });
      },[])
    }
  return (
    <span aria-hidden="true">
          {
            props.word.map((letter, index) => {
              if(letter !== ' '){
                return <span className='inline-flex overflow-hidden'>
                  <span className={`${props.className} relative`}>{letter}</span>
                </span>
              }else {
                return <span>&nbsp;</span>
              }
            })
          }
    </span>
  )
}

export default Animation