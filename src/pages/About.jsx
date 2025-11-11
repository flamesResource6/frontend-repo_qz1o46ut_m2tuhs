import Navbar from '../Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900">About SunLite Solar</h1>
            <p className="mt-4 text-gray-700 leading-relaxed">
              We are a manufacturing-first company focused on dependable solar lighting and clean power solutions. Our engineering team designs every product in-house, ensuring performance, longevity and value. From smart street lights to compact garden fixtures and portable solar kits, we build for real-world conditions and simple maintenance.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li>• ISO-certified processes and rigorous QC</li>
              <li>• In-house optics, thermal and electronics design</li>
              <li>• End-to-end support: assessment, design, installation, service</li>
            </ul>
          </div>
          <div>
            <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-100 bg-white">
              <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1600&auto=format&fit=crop" alt="Team at work" className="w-full aspect-[4/3] object-cover" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
