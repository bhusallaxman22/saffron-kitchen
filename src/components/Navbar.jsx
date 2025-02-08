// src/components/Navbar.js
import React, { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { MenuAlt3Icon, XIcon } from '@heroicons/react/outline'
import logo from '../assets/logo.png'
import { motion } from 'framer-motion'

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu' },
  { name: 'About Us', path: '/about' },
  { name: 'Meal Plan', path: '/meal-plan' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Catering', path: '/catering' },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed inset-x-0 top-0 z-50 bg-white/10 backdrop-blur-md"
    >
      <nav className="flex items-center justify-between p-6 lg:px-8 lg:py-4">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col"
          >
            <Link to="/">
              <img src={logo} alt="Saffron" className="h-12 w-auto" />
            </Link>
          </motion.div>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-100"
            onClick={() => setMobileMenuOpen(true)}
          >
            <MenuAlt3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-sm font-semibold leading-6 text-gray-100 hover:text-saffron"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
          <Link to="/">
              <img src={logo} alt="Saffron" className="h-12 w-auto" />
            </Link>            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/25">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100 hover:bg-gray-800"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </motion.header>
  )
}
