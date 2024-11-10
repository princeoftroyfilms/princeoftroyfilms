'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Navigation from '@/components/navigation'

export default function NewsPage() {
  const { scrollY } = useScroll()

  // Parallax effect for background image
  const imageY = useTransform(scrollY, [0, 500], [0, 100])

  return (
    <div className="min-h-screen bg-[#1a1a1d] text-white font-['Dhurjati',sans-serif] overflow-hidden">
      <Navigation />

      {/* Main Content */}
      <main className="relative min-h-screen flex items-center justify-center">
        {/* Background Image with Parallax */}
        <motion.div 
          className="absolute inset-0 w-full h-full"
          style={{ y: imageY }}
        >
          <Image
            src="/images/IMG_3483.JPG"
            alt="Construction walkway"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>

        {/* Content */}
        <motion.div 
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            NEWS
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-white/80 max-w-xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Our news section is currently under construction. Check back soon for updates on our latest projects and announcements.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link href="/">
              <Button 
                variant="outline" 
                className="text-white border-white hover:bg-white hover:text-black transition-colors duration-300"
              >
                Return Home
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </main>

      {/* Floating Logo */}
      <motion.div 
        className="fixed bottom-8 right-8 w-16 h-16 z-50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        <Image
          src="/images/LOGO%20SAMPLE%203.PNG"
          alt="Prince of Troy Films Logo"
          width={100}
          height={100}
          className="w-full h-auto"
        />
      </motion.div>
    </div>
  )
}