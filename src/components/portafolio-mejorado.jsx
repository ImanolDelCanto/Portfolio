"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { SobreMiComponent } from "./sobre-mi"
import { Habilidades } from "./habilidades"
import { Proyectos } from "./proyectos"
import { Contacto } from "./contacto"
import { Footer } from "./footer"
import { Header } from "./header"
import { AnimatedGradient } from "./ui/animated-gradient"
import { Code, User, Briefcase, Mail, ChevronUp } from "lucide-react"
import { DotPattern } from '@/components/ui/dot-pattern'
export function PortafolioMejoradoComponent() {
  const [activeSection, setActiveSection] = useState("sobremi")
  const [showScrollTop, setShowScrollTop] = useState(false)
  const mainRef = useRef(null)

  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.05], [1, 0.97])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setActiveSection(id)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["sobremi", "proyectos", "habilidades", "contacto"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }

      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "sobremi", label: "home", icon: <User className="h-5 w-5" /> },
    { id: "proyectos", label: "projects", icon: <Briefcase className="h-5 w-5" /> },
    { id: "habilidades", label: "skills", icon: <Code className="h-5 w-5" /> },
    { id: "contacto", label: "contacts", icon: <Mail className="h-5 w-5" /> },
  ]

  return (
    <div className="min-h-screen bg-zinc-900 text-gray-100 relative overflow-hidden">
      <AnimatedGradient />

      {/* Decorative elements */}
      <DotPattern className="top-20 right-10" animate />
      <DotPattern className="bottom-40 left-10" animate />
      <DotPattern className="top-1/2 left-1/3" animate />

      {/* Sidebar Navigation */}
      <div className="hidden md:flex flex-col w-16 lg:w-64 border-r border-zinc-800/50 fixed h-full z-50 backdrop-blur-sm bg-zinc-900/80">
        <motion.div
          className="p-4 border-b border-zinc-800/50 flex items-center justify-center lg:justify-start gap-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Code className="h-6 w-6 text-purple-400" />
          <span className="hidden lg:inline font-mono font-bold bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
            Imanol
          </span>
        </motion.div>

        <nav className="flex flex-col p-2 gap-2 mt-4">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex items-center gap-3 p-2 rounded-md transition-all duration-300 ${
                activeSection === item.id
                  ? "bg-zinc-800/80 text-white"
                  : "text-gray-500 hover:text-gray-300 hover:bg-zinc-800/30"
              }`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ x: 5 }}
            >
              {item.icon}
              <span className="hidden lg:inline font-mono">{item.label}</span>
            </motion.button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 md:ml-16 lg:ml-64" ref={mainRef}>
        <motion.div style={{ opacity, scale }} className="origin-top">
          <header className="container mx-auto px-4 py-8 relative z-10">
            <Header />
          </header>
        </motion.div>

        <main className="container mx-auto px-4 pb-16 relative z-10">
          {/* About Me Section */}
          <section id="sobremi" className="mb-24 scroll-mt-16">
            <SobreMiComponent />
          </section>

          {/* Projects Section */}
          <section id="proyectos" className="mb-24 scroll-mt-16">
            <Proyectos />
          </section>

          {/* Skills Section */}
          <section id="habilidades" className="mb-24 scroll-mt-16">
            <Habilidades />
          </section>

          {/* Contact Section */}
          <section id="contacto" className="mb-24 scroll-mt-16">
            <Contacto />
          </section>
        </main>

        <footer className="bg-zinc-900 border-t border-zinc-800/50 py-8 relative z-10">
          <Footer setActiveSection={scrollToSection} />
        </footer>
      </div>

      {/* Mobile Navigation */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-zinc-900/80 border-t border-zinc-800/50 z-50 backdrop-blur-md">
        <div className="flex justify-around p-2">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`p-3 rounded-md ${activeSection === item.id ? "text-purple-400" : "text-gray-500"}`}
              whileTap={{ scale: 0.9 }}
            >
              {item.icon}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-20 right-4 md:bottom-8 md:right-8 p-3 rounded-full bg-zinc-800/80 border border-zinc-700/50 text-white z-50 backdrop-blur-sm hover:bg-zinc-700/80 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

