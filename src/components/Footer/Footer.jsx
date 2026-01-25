import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 min-h-[200px] flex items-center justify-center pb-5">
      {/* ✅ VALID WIDTH + PADDING */}
      <div className="mt-5">

        <div className="grid gap-16 sm:grid-cols-2 lg:grid-cols-5">

          {/* BRAND */}
          <div className="lg:col-span-2 flex justify-center">
            <div className="max-w-sm">
              <div className="flex items-center gap-3 mb-6">
                <Logo width="56px" />
                <span className="text-lg font-semibold text-slate-900">
                  BlogApp
                </span>
              </div>

              <p className="text-sm text-gray-400 leading-relaxed mb-5">
                A modern blogging platform to create, publish, and explore articles with ease.
              </p>

              <p className="text-sm text-slate-500">
                © {new Date().getFullYear()} DevUI. All rights reserved.
              </p>
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wide text-slate-800">
              Company
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="footer-link hover:text-slate-600">Features</Link></li>
              <li><Link to="/" className="footer-link hover:text-slate-600">Pricing</Link></li>
              <li><Link to="/" className="footer-link hover:text-slate-600">Affiliate Program</Link></li>
              <li><Link to="/" className="footer-link hover:text-slate-600">Press Kit</Link></li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wide text-slate-800">
              Support
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="footer-link hover:text-slate-600">Account</Link></li>
              <li><Link to="/" className="footer-link hover:text-slate-600">Help</Link></li>
              <li><Link to="/" className="footer-link hover:text-slate-600">Contact Us</Link></li>
              <li><Link to="/" className="footer-link hover:text-slate-600">Customer Support</Link></li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wide text-slate-800">
              Legal
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="footer-link hover:text-slate-600">Terms & Conditions</Link></li>
              <li><Link to="/" className="footer-link hover:text-slate-600">Privacy Policy</Link></li>
              <li><Link to="/" className="footer-link hover:text-slate-600">Licensing</Link></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
