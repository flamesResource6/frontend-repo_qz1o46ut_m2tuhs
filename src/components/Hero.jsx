export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-yellow-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Bright, Reliable, Sustainable
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              We design and manufacture high‑performance solar lighting solutions for streets, industries, campuses and homes.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#certs" className="inline-flex items-center px-5 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">View Certifications</a>
              <a href="/products" className="inline-flex items-center px-5 py-3 rounded-lg bg-gray-900 text-white font-semibold hover:bg-black transition-colors">Explore Products</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-white shadow-xl ring-1 ring-gray-100 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1707051756265-a171d9190ead?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTb2xhciUyMHBhbmVscyUyMGFuZCUyMGxpZ2h0c3xlbnwwfDB8fHwxNzYyODYyMTI0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Solar panels and lights" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur rounded-xl shadow p-4">
              <p className="text-sm text-gray-700">25+ years combined engineering expertise</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
