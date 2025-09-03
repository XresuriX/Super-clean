import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <div>
        <Link 

        href={'/'}
        className='text-[28px] text-primary'>
            VKS<span className='text-white'>Cleaning</span>
        </Link>

    </div>
  )
}

export default Logo