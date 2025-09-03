import React from 'react'
import TopHeader from './TopHeader/TopHeader'
import Image from 'next/image'
import Hero from "../Hero/Hero"
import { NavigationMenuDemo } from '../ui/navigation-menu'
const Header = () => {
  return (
    <header className='flex flex-col min-h-screen overflow-hidden bg-center bg-no-repeat bg-cover bg-header-image'>
       <NavigationMenuDemo />
      <Hero />
    </header>
  )
}

export default Header