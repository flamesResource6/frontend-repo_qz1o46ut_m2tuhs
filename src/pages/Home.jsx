import Navbar from '../Navbar'
import Hero from '../components/Hero'
import Certifications from '../components/Certifications'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50">
      <Navbar />
      <Hero />
      <Certifications />
      <Footer />
    </div>
  )
}
