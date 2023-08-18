import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa'; // Import the quote icon from react-icons
import avatar from "../public/avatar.png"
import Image from 'next/image';


const Testimonial = ({ name, role, content }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-1 hover:shadow-xl transition-transform duration-300">
    <div className="flex items-center mb-4">
      <FaQuoteLeft className="text-primary mr-2" />
      <p className="text-xl font-semibold text-secondary">{content}</p>
    </div>
    <div className="flex items-center">
      <div className="flex-shrink-0">
        <Image src={avatar} alt={name} className="w-12 h-12 rounded-full" />
      </div>
      <div className="ml-3">
        <p className="text-lg font-semibold text-dim-gray">{name}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  </div>
);

const TestimonialSection = () => {
    const testimonials = [
        {
          name: 'John Doe',
          role: 'Homeowner',
          content: 'VKS Cleaning transformed my living space into a spotless oasis. Their attention to detail and eco-friendly approach made all the difference.',
        },
        {
          name: 'Jane Smith',
          role: 'Business Owner',
          content: 'We rely on VKS Cleaning for our office cleaning needs. Their professionalism and efficiency keep our workplace looking its best.',
        },
        {
          name: 'Alice Johnson',
          role: 'Resident',
          content: 'VKS Cleaning consistently delivers exceptional cleaning services. They\'ve exceeded my expectations every time.',
        },
        {
          name: 'Robert Williams',
          role: 'Homeowner',
          content: 'I was amazed by the thoroughness of VKS Cleaning. They left every corner of my home sparkling clean.',
        },
        {
          name: 'Emily Davis',
          role: 'Resident',
          content: 'VKS Cleaning pays attention to every detail, making my home feel fresh and inviting.',
        },
        {
          name: 'Michael Thompson',
          role: 'Business Owner',
          content: 'VKS Cleaning has been an integral part of maintaining a clean and welcoming environment for our customers.',
        },
        {
          name: 'Olivia Harris',
          role: 'Homeowner',
          content: 'I\'m always impressed by VKS Cleaning\'s dedication to using eco-friendly products. They truly care about the environment.',
        },
        {
          name: 'David Lee',
          role: 'Resident',
          content: 'I no longer have to worry about cleaning my home thanks to VKS Cleaning. They make life so much easier.',
        },
        {
          name: 'Sophia Martinez',
          role: 'Business Owner',
          content: 'VKS Cleaning has consistently delivered high-quality cleaning services, helping us maintain a professional image.',
        },
        {
          name: 'William Johnson',
          role: 'Homeowner',
          content: 'The VKS Cleaning team is reliable and efficient. I always come home to a beautifully cleaned space.',
        },
      ];

  return (
    <section className="bg-parallax-image bg-center bg-cover bg-no-repeat py-16 relative overflow-hidden">

      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-3xl font-semibold text-secondary mb-6">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              content={testimonial.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
