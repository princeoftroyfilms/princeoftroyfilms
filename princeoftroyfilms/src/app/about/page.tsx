'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import Navigation from '@/components/navigation'

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()

  const titleY = useTransform(scrollY, [0, 300], [0, 100])
  const titleOpacity = useTransform(scrollY, [0, 300], [1, 0])

  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({})

  const handleImageError = (imageName: string) => {
    setImageErrors(prev => ({ ...prev, [imageName]: true }))
  }

  const retryImage = (imageName: string) => {
    setImageErrors(prev => ({ ...prev, [imageName]: false }))
  }

  return (
    <div className="min-h-screen bg-black text-white font-['Dhurjati',sans-serif] overflow-hidden">
      <Navigation />

      {/* Hero Title */}
      <motion.div 
        className="fixed top-0 left-0 w-full h-screen flex items-center justify-center z-10 pointer-events-none"
        style={{ y: titleY, opacity: titleOpacity }}
      >
        <h1 className="text-6xl md:text-8xl font-bold tracking-widest">
          TROY MMXXIV
        </h1>
      </motion.div>

      {/* Image Collage */}
      <div className="relative pt-screen">
        <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="aspect-square relative overflow-hidden"
          >
            {imageErrors['judgmentOfParis'] ? (
              <div className="w-full h-full flex flex-col items-center justify-center bg-gray-800 text-white p-4">
                <p className="text-center mb-4">Failed to load image</p>
                <button
                  onClick={() => retryImage('judgmentOfParis')}
                  className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition-colors"
                >
                  Retry
                </button>
              </div>
            ) : (
              <Image
                src="/images/The_Judgment_of_Paris_MET_DP878955.jpg"
                alt="The Judgment of Paris, classical engraving"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                onError={() => handleImageError('judgmentOfParis')}
              />
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="aspect-square relative overflow-hidden"
          >
            {imageErrors['priamHoldingUrn'] ? (
              <div className="w-full h-full flex flex-col items-center justify-center bg-gray-800 text-white p-4">
                <p className="text-center mb-4">Failed to load image</p>
                <button
                  onClick={() => retryImage('priamHoldingUrn')}
                  className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition-colors"
                >
                  Retry
                </button>
              </div>
            ) : (
              <Image
                src="/images/Priam_holding_the_golden_urn_with_the_remains_of_Hector_MET_225139.jpg"
                alt="Relief sculpture of Priam holding Hector's urn"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                onError={() => handleImageError('priamHoldingUrn')}
              />
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="aspect-square relative overflow-hidden"
          >
            {imageErrors['goldenDiadem'] ? (
              <div className="w-full h-full flex flex-col items-center justify-center bg-gray-800 text-white p-4">
                <p className="text-center mb-4">Failed to load image</p>
                <button
                  onClick={() => retryImage('goldenDiadem')}
                  className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition-colors"
                >
                  Retry
                </button>
              </div>
            ) : (
              <Image
                src="/images/Large_diadem_from_the_%22Treasure_of_Priam%22_(replica),_original_from_Troy_II,_c._2300_BC_(28679204881).jpg"
                alt="Golden diadem from the Treasure of Priam"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                onError={() => handleImageError('goldenDiadem')}
              />
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="aspect-square relative overflow-hidden"
          >
            {imageErrors['priamAtAchillesFeet'] ? (
              <div className="w-full h-full flex flex-col items-center justify-center bg-gray-800 text-white p-4">
                <p className="text-center mb-4">Failed to load image</p>
                <button
                  onClick={() => retryImage('priamAtAchillesFeet')}
                  className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition-colors"
                >
                  Retry
                </button>
              </div>
            ) : (
              <Image
                src="/images/Langlois_Priam_aux_pieds_d'Achille.JPG"
                alt="Painting of Priam at Achilles' feet"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                onError={() => handleImageError('priamAtAchillesFeet')}
              />
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="aspect-square relative overflow-hidden"
          >
            {imageErrors['hectorSarcophagus'] ? (
              <div className="w-full h-full flex flex-col items-center justify-center bg-gray-800 text-white p-4">
                <p className="text-center mb-4">Failed to load image</p>
                <button
                  onClick={() => retryImage('hectorSarcophagus')}
                  className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition-colors"
                >
                  Retry
                </button>
              </div>
            ) : (
              <Image
                src="/images/640px-Sarcophagus_Hector_MNA_Reggio_Calabria.jpg"
                alt="Sarcophagus relief depicting scenes from Troy"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                onError={() => handleImageError('hectorSarcophagus')}
              />
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="aspect-square relative overflow-hidden"
          >
            {imageErrors['hectorReturned'] ? (
              <div className="w-full h-full flex flex-col items-center justify-center bg-gray-800 text-white p-4">
                <p className="text-center mb-4">Failed to load image</p>
                <button
                  onClick={() => retryImage('hectorReturned')}
                  className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition-colors"
                >
                  Retry
                </button>
              </div>
            ) : (
              <Image
                src="/images/640px-Hector_brought_back_to_Troy.jpg"
                alt="Relief showing Hector's body being returned"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                onError={() => handleImageError('hectorReturned')}
              />
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="aspect-square relative overflow-hidden"
          >
            {imageErrors['greekAmphora'] ? (
              <div className="w-full h-full flex flex-col items-center justify-center bg-gray-800 text-white p-4">
                <p className="text-center mb-4">Failed to load image</p>
                <button
                  onClick={() => retryImage('greekAmphora')}
                  className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition-colors"
                >
                  Retry
                </button>
              </div>
            ) : (
              <Image
                src="/images/640px-Amphora_death_Priam_Louvre_F222.jpg"
                alt="Greek amphora depicting Trojan War scenes"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                onError={() => handleImageError('greekAmphora')}
              />
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="aspect-square relative overflow-hidden"
          >
            {imageErrors['judgmentOfParis2'] ? (
              <div className="w-full h-full flex flex-col items-center justify-center bg-gray-800 text-white p-4">
                <p className="text-center mb-4">Failed to load image</p>
                <button
                  onClick={() => retryImage('judgmentOfParis2')}
                  className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition-colors"
                >
                  Retry
                </button>
              </div>
            ) : (
              <Image
                src="/images/Judgment_of_Paris_-_MET_DP-19778-001.jpg"
                alt="Classical painting of the Judgment of Paris"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                onError={() => handleImageError('judgmentOfParis2')}
              />
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="aspect-square relative overflow-hidden"
          >
            {imageErrors['achillesAndPriam'] ? (
              <div className="w-full h-full flex flex-col items-center justify-center bg-gray-800 text-white p-4">
                <p className="text-center mb-4">Failed to load image</p>
                <button
                  onClick={() => retryImage('achillesAndPriam')}
                  className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition-colors"
                >
                  Retry
                </button>
              </div>
            ) : (
              <Image
                src="/images/Achilles_and_Priam,_in_conversation_outside_of_Troy_MET_DP878758.jpg"
                alt="Engraving of Achilles and Priam's meeting"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                onError={() => handleImageError('achillesAndPriam')}
              />
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}