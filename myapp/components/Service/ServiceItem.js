import React from 'react'
import Image from 'next/image'

const ServiceItem = ({imageSrc, altText, title, description}) => {
  return (
    <div className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300'>
        <Image 
        src={imageSrc}
        alt={altText}
        width={300}
        height={200}
        className='w-full rounded-lg'
        />
        <h2 className='text-xl font-bold mt-4'>{title}</h2>
        <p className='text-gray-800 mt-2'>{description}</p>
    </div>
  )
}

export default ServiceItem