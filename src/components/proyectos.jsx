"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { DotPattern } from '@/components/ui/dot-pattern'
import { SectionHeading } from "./ui/section-heading"
import { ExternalLink, Github } from "lucide-react"

export function Proyectos() {
  const proyectos = [
    {
      title: "Landing Page",
      description:
        "Sitio web que muestra informacion sobre el negocio Alumbar y tiene una parte de catalogo de sus productos con sus precios ",
      images: ["/media/alumbar.png"],
      tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
      url: "https://alumbaronline.com/",
      isGithub: false,
    },
    {
      title: "Landing Page",
      description: "Sitio web que muestra qué son los vuelos bautismo y permite reservar para realizarlos.",
      images: ["/media/Experiencias Aereas.png"],
      tags: ["React", "Next.js", "Tailwind CSS"],
      url: "https://experienciasaereas.vercel.app/",
      isGithub: false,
    },
    {
      title: "Sistema para emprendimiento",
      description:
        "Sitio web en donde el usuario puede llevar el control de sus productos y ventas. Se conecta a una base de datos para mantener un registro en tiempo real. Fue creado para ser autoadministrable y no requerir conocimientos técnicos. (Realizado en base a mi prototipo).",
      images: [
        "/media/sistem1 (1).png",
        "/media/sistem1 (2).png",
        "/media/sistem1 (4).png",
        "/media/sistem1 (5).png",
        "/media/sistem1 (6).png",
      ],
      tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      url: "https://github.com/Imaagus/stockManagmentCrochet",
      isGithub: true,
    },
    {
      title: "Aplicación de noticias",
      description:
        "Aplicación que realiza consultas a una API mediante Retrofit y Moshi para obtener las últimas noticias. Posee una base de datos local a través de SharedPreferences, utilizada para guardar usuarios durante el registro y permitir que puedan iniciar sesión posteriormente. Desarrollada por 4 integrantes.",
      images: ["/media/appview.png"],
      tags: ["Kotlin"],
      url: "https://github.com/Imaagus/Appnoticias",
      isGithub: true,
    },
    {
      title: "Sistema de gestión de stock",
      description:
        "Sistema conectado a una base de datos Xata, donde una tabla almacena los productos y otra las categorías de estos. Permite realizar el CRUD de manera sencilla, registrar ventas y consultar cuánto se ha vendido de cada producto, así como el total recaudado. Su objetivo es simplificar el control de productos para el usuario. Aún está en desarrollo (se agregarán inicio de sesión, permisos y más funcionalidades). Utiliza Herramienta v0.",
      images: ["/media/sistemManag.png"],
      tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      url: "https://github.com/Imaagus/stockManagement",
      isGithub: true,
    },
    {
      title: "Sistema de cabañas",
      description:
        "Sistema cuyo objetivo es registrar las reservas de unas cabañas, guardando los datos en una base de datos. Su propósito es simplificar la tarea de gestionar las cabañas con una interfaz sencilla pero útil. Aún está en desarrollo (faltan funcionalidades). Utiliza Herramienta v0.",
      images: [
        "/media/cabañas (1).png", 
        "/media/cabañas (2).png",
        "/media/cabañas (3).png",

      ],
      tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      url: "https://github.com/Imaagus/-cabinManagement",
      isGithub: true,
    },
    {
      title: "Juego de preguntas y respuestas",
      description:
        "Juego de preguntas sobre fútbol desarrollado en el lenguaje C. Implementa lectura de archivos, estructuras, y otras funcionalidades.",
      images: ["/media/c.jpg"],
      tags: ["C"],
      url: "https://github.com/Imaagus/QuizGame",
      isGithub: true,
    },
    {
      title: "Sistema de aeropuerto con menú",
      description:
        "Sistema que utiliza listas, pilas y colas para crear, mostrar y administrar aviones, sus mantenimientos y los vuelos realizados por estos.",
      images: ["/media/c.jpg"],
      tags: ["C"],
      url: "https://github.com/Imaagus/trabajoPractico",
      isGithub: true,
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

      <SectionHeading title="projects" />

      <motion.div
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {proyectos.map((project, index) => (
          <motion.div
            key={index}
            className="bg-zinc-800/50 border border-zinc-700/50 p-4 rounded-md flex flex-col backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 group"
            variants={item}
            whileHover={{ y: -5 }}
          >
            <div className="mb-4">
              <h4 className="text-lg font-semibold mb-1 group-hover:text-purple-400 transition-colors">
                {project.title}
              </h4>
              <p className="text-sm text-gray-400 mb-4">{project.description}</p>
            </div>

            <div className="relative w-full mb-4 flex-grow">
              <Carousel className="w-full">
                <CarouselContent>
                  {project.images.map((img, imgIndex) => (
                    <CarouselItem key={imgIndex}>
                      <div className="relative h-40 w-full overflow-hidden rounded-md group-hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all duration-300">
                        <Image
                          src={img || "/placeholder.svg"}
                          alt={`${project.title} - Image ${imgIndex + 1}`}
                          fill
                          className="object-cover object-top rounded-md transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {project.images.length > 1 && (
                  <>
                    <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-zinc-800/80 border-zinc-700 hover:bg-zinc-700/80" />
                    <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-zinc-800/80 border-zinc-700 hover:bg-zinc-700/80" />
                  </>
                )}
              </Carousel>
            </div>

            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <motion.div
                    key={tagIndex}
                    className="bg-zinc-700/50 text-xs py-1 px-3 rounded-full border border-transparent hover:border-purple-500/30 hover:bg-purple-500/10 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tag}
                  </motion.div>
                ))}
              </div>

              <Link href={project.url} target="_blank">
                <Button
                  className="w-full bg-gradient-to-r from-purple-600/80 to-cyan-600/80 hover:from-purple-500 hover:to-cyan-500 text-white border-none group/btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {project.isGithub ? (
                    <span className="flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      Ver en GitHub
                      <ExternalLink className="w-3 h-3 ml-auto transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Ver Proyecto
                      <ExternalLink className="w-3 h-3 ml-auto transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </span>
                  )}
                </Button>
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

