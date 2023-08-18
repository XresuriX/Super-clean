import ContactUs from '@/components/ContactUs'
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
    <ContactUs />
    <Footer />
   </main>
  )
}
