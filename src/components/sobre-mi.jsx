"use client"

import { motion } from "framer-motion"
import {
  Code,
  BookOpen,
  Briefcase,
  Lightbulb,
  Target,
  Car,
  DumbbellIcon as BicepsFlexed,
  LucideGamepad2,
} from "lucide-react"
import { DotPattern } from '@/components/ui/dot-pattern'
import { SectionHeading } from "./ui/section-heading"

export function SobreMiComponent() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
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

      <SectionHeading title="about-me" />

      <motion.div
        className="grid md:grid-cols-2 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={item}>
          <motion.div
            className="bg-zinc-800/50 border border-zinc-700/50 p-6 rounded-md mb-6 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 group"
            whileHover={{ y: -5 }}
          >
            <h4 className="font-semibold mb-4 group-hover:text-purple-400 transition-colors">Mi Historia</h4>
            <div className="space-y-4 text-gray-300">
              <p>
                Comencé a estudiar Sistemas porque es un mundo donde todo lo que imagino y pienso puede transformarse en
                algo real. Me gusta creer que en el ámbito de la tecnología no existen límites para lo que se puede
                lograr. Me apasiona la idea de brindar soluciones a problemas de la vida cotidiana a través de sistemas,
                ya que creo que, casi siempre, estos pueden ser resueltos mediante la tecnología.
              </p>
              <p>
                Actualmente me encuentro estudiando la Licenciatura de Sistemas lo cual me ha dado muchas herramientas
                para poder hacer lo que mas me gusta, desarrollar sistemas. Al mismo tiempo aprendo de manera autonoma
                diferentes tegnologias actuales para poder seguir creciendo profesionalmente y solucionar de la manera
                mas eficiente los distintos desafios que me propongo.
              </p>
              <p>
                Creo que la clave para el éxito en este mundo de los sistemas es combinar creatividad, aprendizaje
                continuo y pasión por resolver problemas.
              </p>
              <p>Hoy en dia estoy me encuentro creando GretSoft, pero estoy abierto a propuestas.</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-zinc-800/50 border border-zinc-700/50 p-6 rounded-md backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 group"
            whileHover={{ y: -5 }}
            variants={item}
          >
            <h4 className="font-semibold mb-4 group-hover:text-purple-400 transition-colors">
              Objetivos Profesionales
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 group/item">
                <div className="p-2 rounded-full bg-zinc-700/50 group-hover/item:bg-purple-500/20 transition-colors">
                  <Target className="w-4 h-4 text-gray-400 group-hover/item:text-purple-400 transition-colors" />
                </div>
                <span>Convertirme en un Desarrollador de Software senior</span>
              </li>
              <li className="flex items-center gap-3 group/item">
                <div className="p-2 rounded-full bg-zinc-700/50 group-hover/item:bg-purple-500/20 transition-colors">
                  <Target className="w-4 h-4 text-gray-400 group-hover/item:text-purple-400 transition-colors" />
                </div>
                <span>Poder contribuir en grandes proyectos</span>
              </li>
              <li className="flex items-center gap-3 group/item">
                <div className="p-2 rounded-full bg-zinc-700/50 group-hover/item:bg-purple-500/20 transition-colors">
                  <Target className="w-4 h-4 text-gray-400 group-hover/item:text-purple-400 transition-colors" />
                </div>
                <span>Especializarme en Java Spring Boot</span>
              </li>
              <li className="flex items-center gap-3 group/item">
                <div className="p-2 rounded-full bg-zinc-700/50 group-hover/item:bg-purple-500/20 transition-colors">
                  <Target className="w-4 h-4 text-gray-400 group-hover/item:text-purple-400 transition-colors" />
                </div>
                <span>Poder liderar mi propio equipo de Desarrollo</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div variants={item}>
          <motion.div
            className="bg-zinc-800/50 border border-zinc-700/50 p-6 rounded-md mb-6 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 group"
            whileHover={{ y: -5 }}
          >
            <h4 className="font-semibold mb-4 group-hover:text-purple-400 transition-colors">Educación</h4>
            <div className="mb-4 p-4 bg-zinc-700/30 rounded-md hover:bg-zinc-700/40 transition-colors">
              <h5 className="font-medium text-purple-300">Licenciatura en Sistemas</h5>
              <p className="text-gray-400">Universidad Nacional de Lanus, 2023 - Presente</p>
              <p className="text-sm text-gray-500 font-mono">Promedio actual: 8.0/10</p>
            </div>
            <div className="p-4 bg-zinc-700/30 rounded-md hover:bg-zinc-700/40 transition-colors">
              <h5 className="font-medium text-purple-300">Ingles (B2)</h5>
              <p className="text-gray-400">Instituto Lenguas Vivas, 2015 - 2022</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-zinc-800/50 border border-zinc-700/50 p-6 rounded-md mb-6 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 group"
            whileHover={{ y: -5 }}
            variants={item}
          >
            <h4 className="font-semibold mb-4 group-hover:text-purple-400 transition-colors">Certificaciones</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-3 p-3 bg-zinc-700/30 rounded-md hover:bg-zinc-700/40 transition-colors">
                <Code className="h-5 w-5 text-purple-400" />
                Desarrollo Web - CoderHouse
              </li>
              <li className="flex items-center gap-3 p-3 bg-zinc-700/30 rounded-md hover:bg-zinc-700/40 transition-colors">
                <Code className="h-5 w-5 text-purple-400" />
                JavaScript - CoderHouse
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-zinc-800/50 border border-zinc-700/50 p-6 rounded-md backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 group"
            whileHover={{ y: -5 }}
            variants={item}
          >
            <h4 className="font-semibold mb-4 group-hover:text-purple-400 transition-colors">
              Fuera del Mundo del Código
            </h4>
            <p className="text-gray-300 mb-4">Cuando no estoy frente a la pantalla, disfruto de:</p>
            <div className="flex flex-wrap gap-3">
              <motion.div
                className="bg-zinc-700/50 text-sm py-2 px-4 rounded-full flex items-center gap-2 hover:bg-purple-500/20 hover:border-purple-500/30 border border-transparent transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <BookOpen className="w-4 h-4 text-purple-400" />
                Leer
              </motion.div>
              <motion.div
                className="bg-zinc-700/50 text-sm py-2 px-4 rounded-full flex items-center gap-2 hover:bg-purple-500/20 hover:border-purple-500/30 border border-transparent transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Briefcase className="w-4 h-4 text-purple-400" />
                Viajar
              </motion.div>
              <motion.div
                className="bg-zinc-700/50 text-sm py-2 px-4 rounded-full flex items-center gap-2 hover:bg-purple-500/20 hover:border-purple-500/30 border border-transparent transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Car className="w-4 h-4 text-purple-400" />
                Aprender de mecanica
              </motion.div>
              <motion.div
                className="bg-zinc-700/50 text-sm py-2 px-4 rounded-full flex items-center gap-2 hover:bg-purple-500/20 hover:border-purple-500/30 border border-transparent transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <BicepsFlexed className="w-4 h-4 text-purple-400" />
                Hacer ejercicio
              </motion.div>
              <motion.div
                className="bg-zinc-700/50 text-sm py-2 px-4 rounded-full flex items-center gap-2 hover:bg-purple-500/20 hover:border-purple-500/30 border border-transparent transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <LucideGamepad2 className="w-4 h-4 text-purple-400" />
                Jugar VideoJuegos
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 0.5,
          staggerChildren: 0.1,
          delayChildren: 0.2,
        }}
      >
        <motion.div
          className="bg-zinc-800/50 border border-zinc-700/50 p-6 rounded-md backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 group"
          whileHover={{ y: -5, scale: 1.02 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-3 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full w-fit mb-4 group-hover:from-purple-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
            <Code className="w-8 h-8 text-purple-400" />
          </div>
          <h4 className="font-semibold mb-2 group-hover:text-purple-400 transition-colors">Aprendizaje Continuo</h4>
          <p className="text-sm text-gray-400">
            Siempre buscando nuevas tecnologías y mejores prácticas para mejorar mis habilidades.
          </p>
        </motion.div>
        <motion.div
          className="bg-zinc-800/50 border border-zinc-700/50 p-6 rounded-md backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 group"
          whileHover={{ y: -5, scale: 1.02 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="p-3 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full w-fit mb-4 group-hover:from-purple-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
            <Briefcase className="w-8 h-8 text-purple-400" />
          </div>
          <h4 className="font-semibold mb-2 group-hover:text-purple-400 transition-colors">Experiencia Práctica</h4>
          <p className="text-sm text-gray-400">
            He trabajado en proyectos personales y reales, aplicando mis conocimientos en situaciones del mundo real.
          </p>
        </motion.div>
        <motion.div
          className="bg-zinc-800/50 border border-zinc-700/50 p-6 rounded-md backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 group"
          whileHover={{ y: -5, scale: 1.02 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="p-3 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full w-fit mb-4 group-hover:from-purple-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
            <Lightbulb className="w-8 h-8 text-purple-400" />
          </div>
          <h4 className="font-semibold mb-2 group-hover:text-purple-400 transition-colors">Innovación</h4>
          <p className="text-sm text-gray-400">
            Me encanta pensar más allá de lo tradicional y brindar soluciones eficaces, innovadoras y prácticas.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

