'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Navigation from '@/components/navigation'
import { ArrowRight } from 'lucide-react'

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const synopsisRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()

  // Parallax effects
  const heroY = useTransform(scrollY, [0, 500], [0, 150])
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0])
  const mistY = useTransform(scrollY, [0, 500], [0, -50])

  // Fade-in animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <div className="min-h-screen bg-[#1a1a1d] text-white font-['Dhurjati',sans-serif] overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <motion.header 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroY }}
        >
          <Image
            src="https:/imagesIMG_3412.JPG"
            alt="Marble statue with wings and sword"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>

        <motion.div 
          className="relative z-10 text-center px-4"
          style={{ opacity: heroOpacity }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            PRINCE OF TROY FILMS
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl font-light mb-8"
          >
            SEIT 2024
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Link href="/gallery-of-film">
              <Button 
                variant="outline" 
                className="text-white border-white hover:bg-white hover:text-black transition-colors duration-300"
              >
                GALLERY OF FILM
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.header>

      {/* Synopsis Section with Mist Effect */}
      <motion.section 
        ref={synopsisRef}
        className="relative py-32 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 1.5 } }
        }}
      >
        {/* Background Image with Mist Effect */}
        <motion.div 
          className="absolute inset-0 w-full h-full"
          style={{ y: mistY }}
        >
          <Image
            src="/images/IMG_3805%203.JPG"
            alt="Tree branches silhouetted against misty sky"
            fill
            className="object-cover object-bottom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1d] via-[#1a1a1d]/50 to-transparent" />
        
          {/* Animated Mist Overlay */}
          <div className="absolute inset-0 animate-mist opacity-50 bg-gradient-to-t from-transparent via-white/20 to-transparent" style={{ top: '30%' }} />
          <div className="absolute inset-0 animate-mist-delayed opacity-30 bg-gradient-to-t from-transparent via-white/10 to-transparent" style={{ top: '40%' }} />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0, 
                transition: { duration: 0.6, ease: "easeOut" }
              }
            }}
          >
            <h2 className="text-3xl font-bold mb-6">Turbid Bedrooms</h2>
            <p className="text-lg leading-relaxed text-white/90">
              Lev is a third-year Edinburgh student living with his flatmate Sonia in Edinburgh's New Town. 
              When the Belarusian boy from Hounslow meets Tommy, the flamboyant boy from Islington, 
              Edinburgh's bleak autumn backdrops a confrontation of affection that challenges reality. 
              The search through bedrooms is, however, brief.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Gallery Section */}
      <motion.section 
        className="relative py-32 px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="relative aspect-video overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/images/IMG_4813.jpeg"
              alt="Girl with graffiti"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 hover:opacity-0" />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-2xl font-bold mb-2">The Last Airfield</h3>
              <p className="text-lg opacity-80">Available on YouTube</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section with Parallax */}
      <motion.section 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: useTransform(scrollY, [0, 1000], [0, 200]) }}
        >
          <Image
            src="/images/3F652092-BD89-40FB-8061-1CEE8BC8DB65.jpg"
            alt="Boy in leather jacket"
            fill
            className="object-contain"
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
      
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
          <p className="text-lg leading-relaxed">
            Prince of Troy Films was founded in 2024 by Jason George Warman while studying at the University of Edinburgh. 
            The company has started by funding short student projects but intends to scale up in the years to come.
          </p>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="relative py-32 px-8">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <p className="text-lg mb-8">
            Prince of Troy Films is a young film production company with the ethos of bringing communities together 
            through multilingual cinema, queer narratives, and the untapped potential of new creatives.
          </p>
          <Link href="/about">
            <Button 
              variant="outline" 
              className="text-white border-white hover:bg-white hover:text-black transition-colors duration-300"
            >
              About Us
            </Button>
          </Link>
        </motion.div>
      </footer>

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