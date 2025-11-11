import Navbar from '../Navbar'
import Footer from '../components/Footer'

const gallery = [
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1497449493050-aad1e7cad165?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520975922324-6b4566fd3d56?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516116216624-53e697fedbe0?q=80&w=1600&auto=format&fit=crop'
]

export default function Gallery() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-emerald-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-extrabold text-gray-900">Project Gallery</h1>
        <p className="text-gray-600 mt-2">Installations across cities, industries and landscapes.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-xl border border-gray-100 shadow-sm bg-white">
              <img src={src} alt="Gallery" className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform" />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
