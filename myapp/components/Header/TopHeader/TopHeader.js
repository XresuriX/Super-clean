

import Link from 'next/link'
import React from 'react'
import {FaMapMarkerAlt, FaPhone} from 'react-icons/fa'
import { FaInstagram, FaFacebook } from 'react-icons/fa'
import {IoLogoYoutube} from 'react-icons/io'

const TopHeader = () => {
  return (
    <section className='header-top bg-white min-h-[48px] flex items-center py-3'>
        <div className='container max-w-[1300px] mx-auto lg:flex lg:justify-between'>
        <div className='header-top-left flex flex-col items-center sm:flex-row sm:justify-center lg:justify-start'>
            <div className='flex py-1'>
                <FaMapMarkerAlt className='w-[10px] mx-2 text-light cursor-pointer' alt='map' />
                <span className='opacity-60 font-light text-sm cursor-pointer'>Experience Near You</span>
            </div>
            <div className='flex py-1 md:ms-5 lg:ms-[72px]'>
            <FaPhone className='w-3 mx-2 text-light cursor-pointer' alt='phone' />
            <span className='text-primary opacity-60 font-light text-sm cursor-pointer'>+123 456 9090</span>
            </div>
        </div>
        <ul className='flex items-center justify-center py-1'>
        <li className='w-3 h-3 md:w-4 md:h-4 flex items-center justify-center mx-2'>
            <Link className='hover:opacity-80 transition ease-in-out duration-300'
            href={'/'}
            >
            <FaInstagram className='text-red-500 hover:text-red-900' />
            </Link>
        </li>
        <li className='w-3 h-3 md:w-4 md:h-4 flex items-center justify-center mx-2'>
            <Link className='hover:opacity-80 transition ease-in-out duration-300'
            href={'/'}
            >
            <IoLogoYoutube className='text-red-500 hover:text-red-900' />
            </Link>
        </li>
        <li className='w-3 h-3 md:w-4 md:h-4 flex items-center justify-center mx-2'>
            <Link className='hover:opacity-80 transition ease-in-out duration-300'
            href={'/'}
            >
            <FaFacebook className='text-blue-500 hover:text-blue-900' />
            </Link>
        </li>
        </ul>
        </div>
    </section>
  )
}

export default TopHeader