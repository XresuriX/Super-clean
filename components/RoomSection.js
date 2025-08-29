"use client"
import React from 'react'
import front from "../public/front.png"
import liveroom from "../public/liveroom.png"
import cleankitchen from "../public/cleankitchen.png"
import car1 from "../public/car1.png"
import carin from "../public/carin.png"
import commerical from "../public/commerical.png"
import Image from 'next/image'

const RoomItem = ({imageSrc, altText, title}) => (
    <span
    className='relative group over-hidden'
    >
        <div className='transition-transform duration-300 ease-in-out cursor-pointer group-hover:scale-105'>
        <Image
        src={imageSrc}
        className='object-cover w-full h-full transform scale-100 group-hover:scale-105' alt={altText}
        />
        </div>
        <div className='absolute bottom-0 text-xl font-medium text-black uppercase transition-opacity duration-300 ease-in-out opacity-0 left-2/4 -translate-x-2/4 md:text-2xl group-hover:opacity-100'>
            {title}
        </div>

    </span>
)

const rooms = [
    {
      imageSrc: front,
      altText: 'Room',
      title: 'Room',
    },
    {
      imageSrc: liveroom,
      altText: 'Livingroom',
      title: 'LivingRoom',
    },
    {
      imageSrc: cleankitchen,
      altText: 'CleanKitchen',
      title: 'CleanKitchen',
    },
    {
        imageSrc: car1,
        altText: 'Car',
        title: 'Car',
      },
      {
        imageSrc: carin,
        altText: 'Vehicle Interior',
        title: 'Vehicle Interior',
      },
      {
        imageSrc: commerical,
        altText: 'Commerical',
        title: 'Commerical',
      },
  ];

const RoomSection = () => {   
           
  return (
    <section className='px-3 py-16'>
        <div className='container mx-auto'>
            <h2 className='text-4xl sm:text-[46px] text-center text-primary mb-3'>Results & Rooms</h2>
            <div className='grid gap-10 py-10 md:grid-cols-2'>
                <p className='font-light opacity-60 sm:text-lg first-letter:text-4xl first-letter:font-bold'>
                VKS Cleaning is your trusted partner in creating pristine and inviting spaces. With a passion for cleanliness and a commitment to excellence, we specialize in delivering top-tier cleaning solutions that transform environments.

                </p>
                <ul className='py-5 sm:py-9 px-7 bg-secondary'>
                    <li className='grid items-center grid-cols-[32px_auto] my-1'>
                        <img
                            src='https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg'
                            alt='broom'
                        />
                        <span className='ml-2 font-light text-white'>Hands on Cleaning</span>
                    </li>
                    <li className='grid items-center grid-cols-[32px_auto] my-1'>
                        <img
                            src='https://images.pexels.com/photos/48889/cleaning-washing-cleanup-the-ilo-48889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                            alt='mop'
                        />
                        <span className='ml-2 font-light text-white'>Efficent & Respectful</span>
                    </li>
                    <li className='grid items-center grid-cols-[32px_auto] my-1'>
                        <img
                            src='https://images.pexels.com/photos/4108726/pexels-photo-4108726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                            alt='sponge'
                        />
                        <span className='ml-2 font-light text-white'>Healthy & Beautiful</span>
                    </li>
                </ul>
            </div>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-[8px]'>
                {rooms.map((room, index) => (
                    <RoomItem
                    key={index}
                    imageSrc={room.imageSrc}
                    altText={room.altText}
                    title={room.title}
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

export default RoomSection