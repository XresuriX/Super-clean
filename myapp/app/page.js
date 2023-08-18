import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import RoomSection from '@/components/RoomSection'
import Service from '@/components/Service/Service'
import TestimonialSection from '@/components/TestimonialSection'


export default function Home() {
  return (
   <main>
    <Header />
    <Service />
    <RoomSection />
    <TestimonialSection />
    <section className="bg-primary py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-white mb-6">Contact Us</h2>
        <p className="text-lg text-white opacity-75 mb-8">Have a question or need assistance? Drop us a message and we'll get back to you.</p>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-white text-sm font-medium mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full px-4 py-2 rounded-md bg-light-gray focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white text-sm font-medium mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full px-4 py-2 rounded-md bg-light-gray focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <div className="mb-4">
            <label htmlFor="question" className="block text-white text-sm font-medium mb-2">Question</label>
            <textarea id="question" name="question" rows="4" className="w-full px-4 py-2 rounded-md bg-light-gray focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
          </div>
          <button type="submit" className="px-6 py-2 bg-secondary text-white font-medium rounded-md hover:bg-primary transition-colors duration-300">
            Submit
          </button>
        </form>
      </div>
    </section>
    <Footer />
   </main>
  )
}
