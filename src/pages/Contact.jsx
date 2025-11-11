import { useState } from 'react'
import Navbar from '../Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-indigo-50" id="contact">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900">Contact Us</h1>
            <p className="mt-2 text-gray-700">Tell us about your requirement and our team will get back within 24 hours.</p>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input name="name" value={form.name} onChange={handleChange} required className="mt-1 w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-1 w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input name="phone" value={form.phone} onChange={handleChange} className="mt-1 w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea name="message" rows="4" value={form.message} onChange={handleChange} className="mt-1 w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <button type="submit" className="inline-flex items-center px-5 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700">Send Message</button>
              {sent && <p className="text-green-700 text-sm mt-2">Thanks! We received your message.</p>}
            </form>
          </div>
          <div>
            <div className="rounded-2xl overflow-hidden shadow-lg ring-1 ring-gray-100 bg-white h-full">
              <iframe title="map" className="w-full h-full min-h-[300px]" src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
            </div>
            <div className="mt-6 text-gray-700 text-sm">
              <p><strong>Email:</strong> info@sunlitesolar.com</p>
              <p><strong>Phone:</strong> +1 555 0123 456</p>
              <p><strong>Address:</strong> 123 Solar Park, Clean City</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
