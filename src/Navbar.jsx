import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItem = (to, label) => (
    <NavLink
      to={to}
      className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
      }`}
      onClick={() => setOpen(false)}
    >
      {label}
    </NavLink>
  )

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-yellow-400 to-amber-500 grid place-items-center text-white font-bold">SL</div>
            <span className="font-semibold text-gray-900">SunLite Solar</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItem('/', 'Home')}
            {navItem('/products', 'Products')}
            {navItem('/gallery', 'Gallery')}
            {navItem('/about', 'About')}
            {navItem('/contact', 'Contact')}
          </nav>

          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-3 flex flex-col">
            {navItem('/', 'Home')}
            {navItem('/products', 'Products')}
            {navItem('/gallery', 'Gallery')}
            {navItem('/about', 'About')}
            {navItem('/contact', 'Contact')}
          </div>
        </div>
      )}
    </header>
  )
}
