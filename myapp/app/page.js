import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import RoomsSection from '@/components/RoomsSection'
import Service from '@/components/Service/Service'
import Image from 'next/image'


export default function Home() {
  return (
   <main>
    <Header />
    <Service />
    <RoomsSection />
    <Footer />
   </main>
  )
}
