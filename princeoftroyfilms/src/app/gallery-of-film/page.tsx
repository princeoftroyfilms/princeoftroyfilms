'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import Navigation from '@/components/navigation'

export default function GalleryOfFilm() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()

  // Parallax effect for background
  const backgroundY = useTransform(scrollY, [0, 500], [0, 100])

  // Fade-in animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  // Text overlay animation variants
  const textFadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.3 }
    }
  }

  return (
    <div className="min-h-screen bg-[#1a1a1d] text-white font-['Dhurjati',sans-serif] overflow-hidden">
      <Navigation />

      {/* Background Image */}
      <motion.div 
        className="fixed inset-0 w-full h-full"
        style={{ y: backgroundY }}
      >
        <Image
          src="/images/IMG_3141.JPG"
          alt="Night bridge with light trails"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </motion.div>

      {/* Gallery Grid */}
      <div className="relative pt-32 px-8 pb-16 max-w-7xl mx-auto z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {/* The Last Airfield */}
          <motion.div 
            className="relative aspect-[3/4] group cursor-pointer"
            variants={fadeIn}
          >
            <Image
              src="/images/IMG_4813.JPG"
              alt="Girl with graffiti"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
            <motion.div 
              className="absolute bottom-4 left-4"
              initial="hidden"
              whileInView="visible"
              variants={textFadeIn}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold">The Last Airfield</h2>
            </motion.div>
          </motion.div>

          {/* Stoke Newington */}
          <motion.div 
            className="relative aspect-[3/4] group cursor-pointer"
            variants={fadeIn}
          >
            <Image
              src="/images/IMG_4641.JPG"
              alt="Pink flamingo street art"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
            <motion.div 
              className="absolute bottom-4 left-4"
              initial="hidden"
              whileInView="visible"
              variants={textFadeIn}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold">Stoke Newington</h2>
            </motion.div>
          </motion.div>

          {/* London, The Early Years */}
          <motion.div 
            className="relative aspect-[3/4] group cursor-pointer"
            variants={fadeIn}
          >
            <Image
              src="/images/IMG_3919.JPG"
              alt="Person in patterned jacket"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
            <motion.div 
              className="absolute bottom-4 left-4"
              initial="hidden"
              whileInView="visible"
              variants={textFadeIn}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold">London, The Early Years</h2>
            </motion.div>
          </motion.div>

          {/* I Hate Vauxhall */}
          <motion.div 
            className="relative aspect-[3/4] group cursor-pointer"
            variants={fadeIn}
          >
            <Image
              src="/images/IMG_3444.JPG"
              alt="Vauxhall cityscape at night"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
            <motion.div 
              className="absolute bottom-4 left-4"
              initial="hidden"
              whileInView="visible"
              variants={textFadeIn}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold">I Hate Vauxhall</h2>
            </motion.div>
          </motion.div>

          {/* Lila */}
          <motion.div 
            className="relative aspect-[3/4] group cursor-pointer"
            variants={fadeIn}
          >
            <Image
              src="/images/IMG_3417.JPG"
              alt="Wine bottle on marble"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
            <motion.div 
              className="absolute bottom-4 left-4"
              initial="hidden"
              whileInView="visible"
              variants={textFadeIn}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold">Lila</h2>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}