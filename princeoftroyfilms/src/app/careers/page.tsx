'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Search, MapPin } from 'lucide-react'
import Navigation from '@/components/navigation'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import Image from 'next/image'

const jobRoles = [
  "Actor",
  "Animator",
  "Art Director",
  "Assistant Director (AD)",
  "Assistant Editor",
  "Audio Engineer",
  "Best Boy (Electric)",
  "Boom Operator",
  "Brand Ambassador",
  "Camera Operator",
  "Casting Director",
  "Choreographer",
  "Cinematographer/Director of Photography",
  "Colorist",
  "Composer",
  "Content Creator",
  "Costume Designer",
  "Creative Director",
  "Darkroom Technician",
  "Digital Imaging Technician (DIT)",
  "Digital Technician",
  "Director",
  "Distribution Manager",
  "DJ",
  "Dolly Grip",
  "Editorial Stylist",
  "Editor",
  "Event Coordinator",
  "Executive Producer",
  "First Assistant Camera (Focus Puller)",
  "Gaffer",
  "Hair Stylist",
  "Key Grip",
  "Lighting Designer",
  "Lighting Technician",
  "Line Producer",
  "Location Manager",
  "Location Scout",
  "Makeup Artist",
  "Mastering Engineer",
  "Model Scout",
  "Music Director",
  "Music Licensing Specialist",
  "Music Producer",
  "Music Publisher",
  "Music Supervisor",
  "Musician",
  "Music Video Director",
  "Model",
  "Photographer",
  "Photo Editor",
  "Photography Assistant",
  "Photojournalist",
  "Producer",
  "Production Accountant",
  "Production Assistant (PA)",
  "Production Coordinator",
  "Production Designer",
  "Prop Master",
  "Royalty Analyst",
  "Script Supervisor",
  "Screenwriter",
  "Second Assistant Camera (Clapper Loader)",
  "Set Decorator",
  "Set Dresser",
  "Songwriter",
  "Sound Designer",
  "Sound Mixer",
  "Sound Technician",
  "Special Effects (SFX) Technician",
  "Storyboard Artist",
  "Studio Manager",
  "Stunt Coordinator",
  "Stunt Performer",
  "Visual Effects (VFX) Supervisor",
  "Voice Actor",
  "Voice Coach",
  "Voice-Over Artist",
  "Wardrobe Assistant",
  "Wardrobe Stylist",
  "Other"
]

export default function CareersPage() {
  const [open, setOpen] = useState(false)
  const [selectedRole, setSelectedRole] = useState("")

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <div className="min-h-screen bg-[#1a1a1d] text-white font-['Dhurjati',sans-serif]">
      <Navigation />
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/IMG_3413.JPG"
          alt="Classical sculptures in bronze"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <main className="relative pt-32 px-4 pb-16 z-10">
        {/* Hero Section */}
        <motion.div 
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Careers</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">Building a Creative Network</p>
        </motion.div>

        {/* Search Section */}
        <motion.div 
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="relative">
            <Button
              variant="outline"
              className="relative w-full justify-start text-sm text-muted-foreground h-16 px-6"
              onClick={() => setOpen(true)}
            >
              <Search className="mr-2 h-5 w-5" />
              {selectedRole || "Select what best describes you"}
            </Button>
          </div>
        </motion.div>

        <CommandDialog open={open} onOpenChange={setOpen}>
          <Command className="rounded-lg border shadow-md">
            <CommandInput placeholder="Search roles..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Available Roles">
                {jobRoles.map((role) => (
                  <CommandItem
                    key={role}
                    onSelect={() => {
                      setSelectedRole(role)
                      setOpen(false)
                    }}
                  >
                    {role}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </CommandDialog>

        {/* Additional Content */}
        {selectedRole && (
          <motion.div 
            className="max-w-4xl mx-auto mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              {selectedRole === "Other" 
                ? "Interested in joining our team?" 
                : `Interested in becoming a ${selectedRole}?`}
            </h2>
            <p className="text-gray-300 mb-4">
              We're always looking for talented individuals to join our creative network. 
              Please get in touch with us at:
            </p>
            <p className="text-2xl font-bold mb-8">info@princeoftroyfilms.com</p>
            <p className="text-gray-300">
              Please attach a copy of your CV and a brief description of yourself. We'll be in touch.
            </p>
          </motion.div>
        )}

        {/* Locations Section */}
        <motion.div 
          className="max-w-4xl mx-auto mt-32 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-8">Locations</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="flex items-center justify-center">
              <MapPin className="w-6 h-6 mr-2" />
              <span className="text-xl">Based in Edinburgh</span>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="w-6 h-6 mr-2" />
              <span className="text-xl">Based in London</span>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  )
}