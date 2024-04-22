import React from 'react'
import Image from 'next/image'
import grid from "../public/images/circle.webp"

const Footer = () => {
  return (
    <section className='p-7 md:pl-24 md:pr-24 md:pt-24 md:pb-7 min-h-[20vh]'>
        <Image src={grid} alt='gridbackground image' loading='lazy' className='absolute opacity-30 bottom-0 z-[-3] left-1/2 h-fit  w-3/5 -translate-x-1/2 2xl:w-[600px]' width={400} height={400}/>
        <div className='grid grid-cols-1 md:grid-cols-12 gap-x-4 gap-y-4'>
            <div className='col-span-6'>
                <h2 className='font-[Gilroy-Black] border-b border-b-dark text-xl md:text-2xl text-dark font-bold'>Navigation</h2>
                <div className='font-[Gilroy-reg] mt-2 text-lg flex flex-col gap-y-3'>
                    <p>About</p>
                    <p>Showcase</p>
                    <p>Experience</p>
                    <p>Coding</p>
                </div>
            </div>
            <div className='col-span-3'>
                <h2 className='font-[Gilroy-Black] border-b border-b-dark text-xl md:text-2xl text-dark font-bold'>Socials</h2>
                <div className='font-[Gilroy-reg] mt-2 text-lg flex flex-col gap-y-3'>
                    <p className='mt-2'>Linkedin</p>
                    <p>Instagram</p>
                    <p>Github</p>
                </div>
            </div>
            <div className='col-span-3'>
                <h2 className='font-[Gilroy-Black] border-b border-b-dark text-xl md:text-2xl text-dark font-bold'>Projects</h2>
                <div className='font-[Gilroy-reg]  mt-2 text-lg flex flex-col gap-y-3'>
                    <p className='mt-2'>Craftzblog</p>
                    <p>Cryptorush</p>
                    <p>URL Shortner</p>
                </div>
            </div>
        </div>
        <div className='mt-8 grid grid-cols-1 md:grid-cols-12'>
            <span className='col-span-6 text-xl md:text-5xl font-[Gilroy-Black]'>
                &copy;2024 <br></br>Abhishek Babbar
            </span> 
        </div>
    </section>
  )
}

export default Footer