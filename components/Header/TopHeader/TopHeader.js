

import Link from 'next/link'
import React from 'react'
import {FaMapMarkerAlt, FaPhone} from 'react-icons/fa'
import { FaInstagram, FaFacebook } from 'react-icons/fa'
import {IoLogoYoutube} from 'react-icons/io'

const TopHeader = () => {
  return (
    <section className='header-top bg-white min-h-[48px] flex items-center py-3'>
        <div className='container max-w-[1300px] mx-auto lg:flex lg:justify-between'>
        <div className='flex flex-col items-center header-top-left sm:flex-row sm:justify-center lg:justify-start'>
            <div className='flex py-1'>
                <FaMapMarkerAlt className='w-[10px] mx-2 text-light cursor-pointer' alt='map' />
                <span className='text-sm font-light cursor-pointer opacity-60'>Experience Near You</span>
            </div>
            <div className='flex py-1 md:ms-5 lg:ms-[72px]'>
            <FaPhone className='w-3 mx-2 cursor-pointer text-light' alt='phone' />
            <span className='text-sm font-light cursor-pointer text-primary opacity-60'>+123 456 9090</span>
            </div>
        </div>
        <ul className='flex items-center justify-center py-1'>
        <li className='flex items-center justify-center w-3 h-3 mx-2 md:w-4 md:h-4'>
            <Link className='transition duration-300 ease-in-out hover:opacity-80'
            href={'/'}
            >
            <FaInstagram className='text-red-500 hover:text-red-900' />
            </Link>
        </li>
        <li className='flex items-center justify-center w-3 h-3 mx-2 md:w-4 md:h-4'>
            <Link className='transition duration-300 ease-in-out hover:opacity-80'
            href={'/'}
            >
            <IoLogoYoutube className='text-red-500 hover:text-red-900' />
            </Link>
        </li>
        <li className='flex items-center justify-center w-3 h-3 mx-2 md:w-4 md:h-4'>
            <Link className='transition duration-300 ease-in-out hover:opacity-80'
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