import React from 'react'

const ContactUs = () => {
  return (
    <section className='bg-primary py-16'>\
    <div className='container mx-auto text-center'>
    <h2 className='text-5xl font-semibold text-white mb-6 '>Contact Us</h2>
    <p className='text-lg text-secondary opacity-75 mb-8'>Have A Question? Leave It Below, We Will Get Back To You Soon</p>
    <form className='max-w-md mx-auto'>
    <div className='mb-4'>
    <label className='block text-white text-sm font-medium mb-2'>Name</label>
    <input type='text' className='w-full px-4 py-2 rounded-md bg-secondary focus:ring-2 focus:ring-primary' />
    </div>
    <div className='mb-4'>
    <label className='block text-white text-sm font-medium mb-2'>Email</label>
    <input type='email' className='w-full px-4 py-2 rounded-md bg-secondary focus:ring-2 focus:ring-primary' />
    </div>
    <div className='mb-4'>
    <label className='block text-white text-sm font-medium mb-2 focus:ring-2 focus:ring-primary'>Question</label>
    <textarea rows='4' 
    className='w-full px-4 py-2 rounded-md bg-secondary'
    ></textarea>
    </div>
    <button 
    className='px-6 py-2 bg-secondary text-white rounded-md hover:bg-primary transition-colors duration-300'>
        Submit
    </button>
    </form>
    </div>
    </section> 
  )
}

export default ContactUs