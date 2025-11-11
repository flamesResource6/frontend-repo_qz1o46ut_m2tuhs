export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="font-semibold text-gray-900">SunLite Solar</div>
            <p className="mt-2 text-gray-600">High‑efficiency solar lighting and power solutions built for reliability.</p>
          </div>
          <div>
            <div className="font-semibold text-gray-900">Quick Links</div>
            <ul className="mt-2 space-y-1 text-gray-600">
              <li><a href="/products" className="hover:text-blue-600">Products</a></li>
              <li><a href="/gallery" className="hover:text-blue-600">Gallery</a></li>
              <li><a href="/about" className="hover:text-blue-600">About</a></li>
              <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-gray-900">Contact</div>
            <p className="mt-2 text-gray-600">info@sunlitesolar.com<br/>+1 555 0123 456<br/>123 Solar Park, Clean City</p>
          </div>
        </div>
        <div className="pt-6 mt-6 border-t border-gray-100 text-xs text-gray-500">© {new Date().getFullYear()} SunLite Solar. All rights reserved.</div>
      </div>
    </footer>
  )
}
