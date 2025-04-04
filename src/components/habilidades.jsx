"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { DotPattern } from '@/components/ui/dot-pattern'
import { SectionHeading } from "./ui/section-heading"

export function Habilidades() {
  const habilidades = [
    {
      categoria: "Tecnologías Frontend",
      tecnologias: [
        {
          src: "/react.svg",
          alt: "react icon",
          nombre: "React",
        },
        {
          src: "/next-js.svg",
          alt: "next icon",
          nombre: "Next.js",
        },
        {
          src: "/javaScript.svg",
          alt: "javascript icon",
          nombre: "JavaScript",
        },
        {
          src: "/tailwind.svg",
          alt: "tailwind icon",
          nombre: "Tailwind CSS",
        },
      ],
    },
    {
      categoria: "Tecnologías Backend",
      tecnologias: [
        {
          src: "/my-sql.svg",
          alt: "MySQL icon",
          nombre: "MySQL",
        },
      ],
    },
    {
      categoria: "Tecnologías de desarrollo de Software",
      tecnologias: [
        {
          src: "/c-icon.svg",
          alt: "C icon",
          nombre: "C",
        },
        {
          src: "/ktl.svg",
          alt: "Kotlin icon",
          nombre: "Kotlin",
        },
      ],
    },
  ]
  const otrasHabilidades = [
    {
      categoria: "Otras Habilidades",
      otros: [
        {
          src: "/git-icon.svg",
          alt: "git icon",
          nombre: "git",
        },
        {
          nombre: "RESTful APIs",
        },
        {
          nombre: "MySQL Workbench",
        },
        {
          nombre: "ADOO",
        },
        {
          nombre: "UML",
        },
        {
          nombre: "Desarrollo mobile",
        },
        {
          nombre: "Agile/Scrum/Kanban",
        },
        {
          nombre: "Cloud computing",
        },
        {
          nombre: "Trabajo en equipo",
        },
      ],
    },
  ]

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

      <SectionHeading title="skills" />

      <motion.div
        className="grid gap-6"
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {habilidades.map((habilidad, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-4 text-purple-400">{habilidad.categoria}</h3>
                <div className="flex flex-wrap gap-3">
                  {habilidad.tecnologias.map((tecnologia, i) => (
                    <motion.div
                      key={i}
                      className="bg-zinc-700/50 flex items-center gap-2 p-2 px-4 rounded-full border border-transparent hover:border-purple-500/30 hover:bg-purple-500/10 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Image
                        src={tecnologia.src || "/placeholder.svg"}
                        alt={tecnologia.alt}
                        width={20}
                        height={20}
                        className="rounded-full"
                      />
                      <span className="text-sm">{tecnologia.nombre}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="bg-zinc-800/50 border border-zinc-700/50 p-6 rounded-md backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300"
          variants={item}
          whileHover={{ y: -5 }}
        >
          {otrasHabilidades.map((habilidad, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4 text-purple-400">{habilidad.categoria}</h3>
              <div className="flex flex-wrap gap-3">
                {habilidad.otros.map((otro, i) => (
                  <motion.div
                    key={i}
                    className="bg-zinc-700/50 flex items-center gap-2 p-2 px-4 rounded-full border border-transparent hover:border-purple-500/30 hover:bg-purple-500/10 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                  >
                    {otro.src && (
                      <Image
                        src={otro.src || "/placeholder.svg"}
                        alt={otro.alt || ""}
                        width={20}
                        height={20}
                        className="rounded-full"
                      />
                    )}
                    <span className="text-sm">{otro.nombre}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

