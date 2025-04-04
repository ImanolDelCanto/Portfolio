"use client"
import { motion } from "framer-motion"

export function DotPattern({ className, animate = false }) {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <div className="grid grid-cols-6 gap-2">
        {Array.from({ length: 36 }).map((_, i) =>
          animate ? (
            <motion.div
              key={i}
              className="w-1 h-1 rounded-full bg-gray-500/20"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                delay: i * 0.05,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          ) : (
            <div key={i} className="w-1 h-1 rounded-full bg-gray-500/20" />
          ),
        )}
      </div>
    </div>
  )
}


