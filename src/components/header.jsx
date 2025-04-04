"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div>
      <nav className="flex justify-between items-center mb-8">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-mono font-bold bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
            Imanol Del Canto
          </h1>
        </motion.div>
        <motion.div
          className="flex items-center space-x-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            variant="outline"
            className="border-zinc-700/50 bg-zinc-800/50 hover:bg-zinc-700/50 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/media/cv.pdf" download="ImanolDelCanto-Cv.pdf" className="flex items-center">
              <Download className="mr-2 h-4 w-4" /> CV
            </Link>
          </Button>
        </motion.div>
      </nav>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col md:flex-row gap-8 items-center md:items-start"
      >
        <motion.div variants={item} className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-cyan-500/30 rounded-full blur-md group-hover:blur-xl transition-all duration-500"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
          <Image
            src="/media/Foto-cv.jpg"
            alt="Foto perfil"
            width={180}
            height={180}
            className="relative w-44 h-44 object-cover object-top rounded-full border-2 border-zinc-700/50 group-hover:border-purple-500/50 transition-all duration-500"
          />
        </motion.div>
        <motion.div variants={item} className="text-center md:text-left">
          <h2 className="text-3xl font-mono font-bold mb-2 bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
            Desarrollador Junior
          </h2>
          <p className="text-lg text-gray-400 mb-1">Estudiante de Licenciatura en Sistemas | Desarrollador web</p>
          <p className="text-sm text-gray-500 mb-4 font-mono">[ 2 años de experiencia ]</p>
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-800/80 border border-purple-500/20 text-xs text-gray-300 font-mono backdrop-blur-sm">
            front-end developer
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

