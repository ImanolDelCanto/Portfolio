"use client"

import { motion } from "framer-motion"

export function SectionHeading({ title, className }) {
  return (
    <motion.h3
      className={`text-xl font-mono font-bold mb-6 flex items-center gap-2 ${className}`}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <span className="text-purple-400 font-normal">#</span>
      <span>{title}</span>
      <span className="flex-grow h-px bg-gradient-to-r from-zinc-700 to-transparent ml-4"></span>
    </motion.h3>
  )
}

