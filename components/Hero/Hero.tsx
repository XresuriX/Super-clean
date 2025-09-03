import React from 'react'
import Image from 'next/image'
import hero from "../../public/hero.png"

const Hero = () => {
  return (
    <section className='relative text-white'>
        <div className='container px-4 py-20 mx-auto md:py-32'>
            <div className='flex flex-col items-center justify-between md:flex-row'>
                <div className='mb-10 md:w-1/2 md:mb-0'>
                    <h1 className='mb-4 text-4xl font-bold md:text-6xl text-secondary'>VKS Cleaning</h1>
                    <p className='mb-6 text-lg md:text-xl'>We Make Your Space Shine Like Outter Space</p>
                    <a href='/' className='px-6 py-2 text-white transition duration-300 rounded bg-primary hover:bg-secondary'>Book Now</a>
                </div>
                <div className='md:w-1/2'>
                    <Image
                    src={hero}
                    width={600}
                    height={400}
                    className='w-full rounded-lg shawdow'
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero