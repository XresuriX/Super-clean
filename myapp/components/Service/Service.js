import React from 'react'
import ServiceItem from './ServiceItem'
import kitchen from "../../public/kitchen.png"
import livingroom from "../../public/livingroom.png"
import bedroom from "../../public/bedroom.png"

const services = [
    {
      imageSrc: bedroom,
      altText: 'Bedroom Cleaning',
      title: 'Bedroom Cleaning',
      description: 'Experience a refreshed and cozy bedroom environment with our meticulous cleaning.',
    },
    {
      imageSrc: kitchen,
      altText: 'Kitchen Cleaning',
      title: 'Kitchen Cleaning',
      description: 'Let our expert team leave your kitchen sparkling clean and ready for your culinary adventures.',
    },
    {
      imageSrc: livingroom,
      altText: 'Living Room Cleaning',
      title: 'Living Room Cleaning',
      description: 'Experience a spotless and inviting living space for relaxation and entertainment.',
    },
  ];


const Service = () => {
  return (
    <section className='bg-secondary py-20'>
        <div className='container mx-auto text-center'>
            <h2 className='text-5xl font-semibold mb-6 text-dim-gray cursor-pointer'>Discover Our Cleaning Services</h2>
            <p className='text-xl text-black font-light mb-8'>Here Are Our Cleaning Specialities</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {services.map((service, index) => (
                    <ServiceItem
                    key={index}
                    imageSrc={service.imageSrc}
                    altText={service.altText}
                    title={service.title}
                    description={service.description}
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Service

