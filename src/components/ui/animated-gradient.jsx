"use client"
import { motion } from "framer-motion"

export function AnimatedGradient({ className }) {
  return (
    <motion.div
      className={`absolute inset-0 opacity-30 pointer-events-none ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.3 }}
      transition={{ duration: 1.5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-cyan-500/10 to-emerald-500/20 animate-gradient-slow" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/0 to-zinc-900 opacity-80" />
    </motion.div>
  )
}

