import Navbar from '../Navbar'
import Footer from '../components/Footer'

const categories = [
  {
    name: 'Street Lights',
    desc: 'All-in-one and semi-integrated LED street lights for cities and campuses.',
    products: [
      { name: 'SLX-30', img: 'https://images.unsplash.com/photo-1565374395542-0ce18882c857?q=80&w=1200&auto=format&fit=crop', specs: '30W | LiFePO4 | IP66' },
      { name: 'SLX-60', img: 'https://images.unsplash.com/photo-1516116216624-53e697fedbe0?q=80&w=1200&auto=format&fit=crop', specs: '60W | MPPT | IP66' },
      { name: 'SLX-90', img: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1200&auto=format&fit=crop', specs: '90W | Smart Dimming | IP66' },
    ],
  },
  {
    name: 'Garden Lights',
    desc: 'Decorative pathway and landscape lighting for villas and resorts.',
    products: [
      { name: 'GLO-10', img: 'https://images.unsplash.com/photo-1473308822086-710304d7d30c?q=80&w=1200&auto=format&fit=crop', specs: 'Warm/Neutral | 10W' },
      { name: 'GLO-15', img: 'https://images.unsplash.com/photo-1525921429624-479b6a26d84c?q=80&w=1200&auto=format&fit=crop', specs: 'Ambient Sensor | 15W' },
      { name: 'GLO-20', img: 'https://images.unsplash.com/photo-1525338078858-d762b5e32f2c?q=80&w=1200&auto=format&fit=crop', specs: 'RGB | 20W' },
    ],
  },
  {
    name: 'High Mast',
    desc: 'High-output luminaires for yards, ports, and industrial areas.',
    products: [
      { name: 'HM-150', img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1200&auto=format&fit=crop', specs: '150W | 140 lm/W' },
      { name: 'HM-240', img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1200&auto=format&fit=crop', specs: '240W | Surge 10kV' },
      { name: 'HM-300', img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop', specs: '300W | Smart Control' },
    ],
  },
  {
    name: 'Solar Power Kits',
    desc: 'Portable and rooftop PV kits for homes and small businesses.',
    products: [
      { name: 'SPK-500', img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200&auto=format&fit=crop', specs: '500W | Li-Ion' },
      { name: 'SPK-1000', img: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop', specs: '1kW | MPPT' },
      { name: 'SPK-2000', img: 'https://images.unsplash.com/photo-1497449493050-aad1e7cad165?q=80&w=1200&auto=format&fit=crop', specs: '2kW | Hybrid' },
    ],
  },
  {
    name: 'Accessories',
    desc: 'Batteries, controllers, poles and mounting hardware.',
    products: [
      { name: 'LiFePO4 Pack', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop', specs: '12.8V | 40Ah' },
      { name: 'MPPT-40', img: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop', specs: 'MPPT | 40A' },
      { name: 'Pole-6m', img: 'https://images.unsplash.com/photo-1520975922324-6b4566fd3d56?q=80&w=1200&auto=format&fit=crop', specs: 'GI | 6 meters' },
    ],
  },
]

function Category({ name, desc, products }) {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
            <p className="text-gray-600 mt-1">{desc}</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700">Get Quote</a>
        </div>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(p => (
            <div key={p.name} className="group rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
              <img src={p.img} alt={p.name} className="w-full aspect-[4/3] object-cover" />
              <div className="p-4">
                <div className="font-semibold text-gray-900">{p.name}</div>
                <div className="text-sm text-gray-600">{p.specs}</div>
                <div className="mt-3">
                  <a href="/contact" className="text-blue-600 text-sm font-medium hover:underline">Request Datasheet</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Products() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      <div className="pt-6">
        <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-extrabold text-gray-900">Our Products</h1>
          <p className="text-gray-600 mt-2">Five focused categories, designed to perform in real‑world conditions.</p>
        </header>
        {categories.map(c => <Category key={c.name} {...c} />)}
      </div>
      <Footer />
    </div>
  )
}
