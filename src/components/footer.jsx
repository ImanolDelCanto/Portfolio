"use client"
import { Github, Linkedin, Mail, Heart } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function Footer({ setActiveSection }) {
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
    <div className="container mx-auto px-4">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div variants={item}>
          <h3 className="text-lg font-mono font-semibold mb-4 text-purple-400">Imanol Del Canto</h3>
          <p className="text-gray-500">Desarrollador Junior especializandome en Java Spring Boot.</p>
        </motion.div>
        <motion.div variants={item}>
          <h3 className="text-lg font-mono font-semibold mb-4 text-purple-400">Enlaces Rápidos</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="#sobremi"
                className="text-gray-500 hover:text-purple-400 transition-colors flex items-center gap-2 group"
                onClick={() => setActiveSection("sobremi")}
              >
                <span className="text-purple-500 font-mono">#</span>
                <span className="group-hover:translate-x-1 transition-transform">home</span>
              </Link>
            </li>
            <li>
              <Link
                href="#proyectos"
                className="text-gray-500 hover:text-purple-400 transition-colors flex items-center gap-2 group"
                onClick={() => setActiveSection("proyectos")}
              >
                <span className="text-purple-500 font-mono">#</span>
                <span className="group-hover:translate-x-1 transition-transform">projects</span>
              </Link>
            </li>
            <li>
              <Link
                href="#habilidades"
                className="text-gray-500 hover:text-purple-400 transition-colors flex items-center gap-2 group"
                onClick={() => setActiveSection("habilidades")}
              >
                <span className="text-purple-500 font-mono">#</span>
                <span className="group-hover:translate-x-1 transition-transform">skills</span>
              </Link>
            </li>
            <li>
              <Link
                href="#contacto"
                className="text-gray-500 hover:text-purple-400 transition-colors flex items-center gap-2 group"
                onClick={() => setActiveSection("contacto")}
              >
                <span className="text-purple-500 font-mono">#</span>
                <span className="group-hover:translate-x-1 transition-transform">contacts</span>
              </Link>
            </li>
          </ul>
        </motion.div>
        <motion.div variants={item}>
          <h3 className="text-lg font-mono font-semibold mb-4 text-purple-400">Conecta</h3>
          <div className="flex space-x-4">
            <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
              <Link
                href="https://github.com/Imaagus"
                target="_blank"
                className="text-gray-500 hover:text-purple-400 transition-colors"
              >
                <Github className="h-6 w-6" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
              <Link
                href="https://www.linkedin.com/in/imanol-del-canto-10135024a/"
                target="_blank"
                className="text-gray-500 hover:text-purple-400 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
              <Link
                href="mailto:imaaugus04@gmail.com"
                className="text-gray-500 hover:text-purple-400 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        className="mt-8 pt-8 border-t border-zinc-800 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-gray-500 font-mono text-sm flex items-center justify-center gap-2">
          © {new Date().getFullYear()} Imanol Del Canto. Todos los derechos reservados.
          <Heart className="h-3 w-3 text-purple-500 animate-pulse" />
        </p>
      </motion.div>
    </div>
  )
}

