'use client'
import React, {useState} from 'react'
import Logo from './Logo'
import MenuButton from './MenuButton'
import MenuItem from './MenuItem'
import Link from 'next/link'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const toogleMenu = () => {
        setMenuOpen(!menuOpen)
    }


    const menuItems = [
        {href: '/', text: 'Home'},
        {href: '/gallery', text: 'Gallery'},
        {href: '/about', text: 'About'},
        {href: '/contact', text: 'Contact'},
    ]
  return (
    <nav className='header-main px-3 flex-1 flex'>
    <div className='container max-w-[1300px] mx-auto flex flex-col'>
        <div className='py-5 md:flex md:justify-between'>
          <div className='flex justify-between'>
                <Logo />
                <MenuButton menuOpen={menuOpen} toogleMenu={toogleMenu} />

                <div className={`navbar-box fixed top-0 z-[100] right-0 w-[300px] h-full bg-light-gray p-5 flex flex-col items-center duration-300 ease-in-out md:relative md:bg-transparent md:flex-row md:h-auto md:w-auto md:p-0 
                ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
                `}>
                    <ul className='flex flex-col w-full text-center mt-[60px] md:flex-row md:mt-0'>
                        {
                            menuItems.map((item, index) => (
                                <MenuItem
                                key={index}
                                href={item.href}
                                text={item.text} 
                                />
                            ))
                        }

                    </ul>
                    <Link
                    href={'/'}
                    className='w-full p-2 bg-primary rounded text-center'
                    >
                    Members
                    </Link>
                </div>

            </div>
        </div>
    </div>
    </nav>
  )
}

export default Navbar