'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Instagram, Home, Briefcase, Newspaper } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const linkVariants = {
    closed: {
      opacity: 0,
      x: 20
    },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.25 + i * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  }

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)} 
        className="fixed top-8 right-8 z-50 mix-blend-difference"
        aria-label="Open menu"
      >
        <Menu className="w-8 h-8 text-white" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-white text-black z-50 overflow-hidden"
          >
            <div className="relative h-full max-w-7xl mx-auto px-8 py-16">
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-8 right-8"
                aria-label="Close menu"
              >
                <X className="w-8 h-8" />
              </button>

              <nav className="h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <motion.div custom={0} variants={linkVariants}>
                    <Link 
                      href="/"
                      onClick={() => setIsOpen(false)}
                      className="text-4xl md:text-6xl font-bold hover:opacity-70 transition-opacity block flex items-center"
                    >
                      <Home className="w-8 h-8 mr-4" />
                      Home
                    </Link>
                  </motion.div>
                  
                  <motion.div custom={1} variants={linkVariants}>
                    <Link 
                      href="/gallery-of-film"
                      onClick={() => setIsOpen(false)}
                      className="text-4xl md:text-6xl font-bold hover:opacity-70 transition-opacity block"
                    >
                      Gallery of Film
                    </Link>
                  </motion.div>
                  
                  <motion.div custom={2} variants={linkVariants}>
                    <Link 
                      href="/careers"
                      onClick={() => setIsOpen(false)}
                      className="text-4xl md:text-6xl font-bold hover:opacity-70 transition-opacity block flex items-center"
                    >
                      <Briefcase className="w-8 h-8 mr-4" />
                      Careers
                    </Link>
                  </motion.div>
                  
                  <motion.div custom={3} variants={linkVariants}>
                    <Link 
                      href="/shop"
                      onClick={() => setIsOpen(false)}
                      className="text-4xl md:text-6xl font-bold hover:opacity-70 transition-opacity block"
                    >
                      Shop
                    </Link>
                  </motion.div>
                  
                  <motion.div custom={4} variants={linkVariants}>
                    <Link 
                      href="/news"
                      onClick={() => setIsOpen(false)}
                      className="text-4xl md:text-6xl font-bold hover:opacity-70 transition-opacity block flex items-center"
                    >
                      <Newspaper className="w-8 h-8 mr-4" />
                      News
                    </Link>
                  </motion.div>
                  
                  <motion.div custom={5} variants={linkVariants}>
                    <Link 
                      href="/about"
                      onClick={() => setIsOpen(false)}
                      className="text-4xl md:text-6xl font-bold hover:opacity-70 transition-opacity block"
                    >
                      About
                    </Link>
                  </motion.div>
                </div>

                <motion.div 
                  variants={linkVariants} 
                  custom={6}
                  className="space-y-8"
                >
                  <div className="flex gap-6">
                    <a href="https://www.instagram.com/princeoftroyfilms/" className="hover:opacity-70 transition-opacity">
                      <Instagram className="w-6 h-6" />
                      <span className="sr-only">Instagram</span>
                    </a>
                  </div>
                  <p className="text-sm">
                    <a href="mailto:info@princeoftroyfilms.com" className="hover:opacity-70 transition-opacity">
                      info@princeoftroyfilms.com
                    </a>
                  </p>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}