const certs = [
  { name: 'ISO 9001', img: 'https://dummyimage.com/320x180/111827/fff&text=ISO+9001' },
  { name: 'CE', img: 'https://dummyimage.com/320x180/1f2937/fff&text=CE' },
  { name: 'RoHS', img: 'https://dummyimage.com/320x180/0f172a/fff&text=RoHS' },
  { name: 'BIS', img: 'https://dummyimage.com/320x180/111827/fff&text=BIS' },
]

export default function Certifications() {
  return (
    <section id="certs" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Certifications</h2>
        <p className="text-gray-600 mt-2">Our products meet global quality and safety standards.</p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {certs.map((c) => (
            <div key={c.name} className="rounded-xl border border-gray-100 shadow-sm overflow-hidden bg-gray-50">
              <img src={c.img} alt={c.name} className="w-full aspect-video object-cover" />
              <div className="p-3 text-center text-sm font-medium text-gray-700">{c.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
