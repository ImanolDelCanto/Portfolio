"use client"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Send, CheckCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import emailjs from "@emailjs/browser"
import Link from "next/link"
import { DotPattern } from "./ui/dot-pattern"
import { SectionHeading } from "./ui/section-heading"

export function Contacto() {
  const form = useRef()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    emailjs.sendForm("service_30z976u", "template_f5ly6h9", form.current, "z42E71FN1v8cabK5c").then(
      () => {
        console.log("SUCCESS!")
        setIsSubmitting(false)
        setIsSuccess(true)
        form.current.reset()

        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSuccess(false)
        }, 5000)
      },
      (error) => {
        console.log("FAILED...", error.text)
        setIsSubmitting(false)
        alert("Error al enviar el mensaje.")
      },
    )
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="relative">
      <DotPattern className="top-10 right-10" animate />
      <DotPattern className="bottom-10 left-10" animate />

      <SectionHeading title="contacts" />

      <p className="text-gray-400 mb-6">¡Estoy siempre abierto a nuevas oportunidades y colaboraciones!</p>

      <motion.div
        className="grid md:grid-cols-2 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          className="bg-zinc-800/50 border border-zinc-700/50 p-6 rounded-md backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300"
          variants={item}
          whileHover={{ y: -5 }}
        >
          <form className="space-y-4" ref={form} onSubmit={sendEmail}>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  className="w-full p-2 rounded-md bg-zinc-700/50 border border-zinc-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  className="w-full p-2 rounded-md bg-zinc-700/50 border border-zinc-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full p-2 rounded-md bg-zinc-700/50 border border-zinc-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                required
              ></textarea>
            </div>
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  className="flex items-center justify-center gap-2 p-2 bg-green-500/20 border border-green-500/30 rounded-md text-green-400"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <CheckCircle className="h-5 w-5" />
                  <span>¡Mensaje enviado con éxito!</span>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600/80 to-cyan-600/80 hover:from-purple-500 hover:to-cyan-500 text-white border-none flex items-center justify-center gap-2"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin"></div>
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Enviar Mensaje</span>
                      </>
                    )}
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>

        <motion.div
          className="bg-zinc-800/50 border border-zinc-700/50 p-6 rounded-md backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300"
          variants={item}
          whileHover={{ y: -5 }}
        >
          <h3 className="text-lg font-semibold mb-4 text-purple-400">Conéctate conmigo</h3>
          <div className="flex flex-col space-y-4">
            <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="https://github.com/ImanolDelCanto"
                target="_blank"
                className="flex items-center gap-3 p-4 bg-zinc-700/50 rounded-md hover:bg-purple-500/20 hover:border-purple-500/30 border border-transparent transition-all group"
              >
                <div className="p-2 bg-zinc-800/80 rounded-full group-hover:bg-purple-500/30 transition-colors">
                  <Github className="h-5 w-5 text-purple-400" />
                </div>
                <span className="group-hover:translate-x-1 transition-transform">github.com/ImanolDelCanto</span>
              </Link>
            </motion.div>
            <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="https://www.linkedin.com/in/imanol-del-canto-10135024a/"
                target="_blank"
                className="flex items-center gap-3 p-4 bg-zinc-700/50 rounded-md hover:bg-purple-500/20 hover:border-purple-500/30 border border-transparent transition-all group"
              >
                <div className="p-2 bg-zinc-800/80 rounded-full group-hover:bg-purple-500/30 transition-colors">
                  <Linkedin className="h-5 w-5 text-purple-400" />
                </div>
                <span className="group-hover:translate-x-1 transition-transform">linkedin.com/in/imanol-del-canto</span>
              </Link>
            </motion.div>
            <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="mailto:imaaugus04@gmail.com"
                className="flex items-center gap-3 p-4 bg-zinc-700/50 rounded-md hover:bg-purple-500/20 hover:border-purple-500/30 border border-transparent transition-all group"
              >
                <div className="p-2 bg-zinc-800/80 rounded-full group-hover:bg-purple-500/30 transition-colors">
                  <Mail className="h-5 w-5 text-purple-400" />
                </div>
                <span className="group-hover:translate-x-1 transition-transform">imaaugus04@gmail.com</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

