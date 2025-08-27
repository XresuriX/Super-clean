import React from 'react'
import Image from 'next/image'
import hero from "../../../public/hero.png"

const Hero = () => {
  return (
    <section className='relative text-white'>
        <div className='container mx-auto px-4 py-20 md:py-32'>
            <div className='flex flex-col md:flex-row items-center justify-between'>
                <div className='md:w-1/2 mb-10 md:mb-0'>
                    <h1 className='text-4xl md:text-6xl text-secondary font-bold mb-4'>VKS Cleaning</h1>
                    <p className='text-lg md:text-xl mb-6'>We Make Your Space Shine Like Outter Space</p>
                    <a href='/' className='bg-primary text-white py-2 px-6 rounded hover:bg-secondary transition duration-300'>Book Now</a>
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