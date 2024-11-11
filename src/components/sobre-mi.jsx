'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, BookOpen, Briefcase, Lightbulb, Target, Coffee } from "lucide-react"

export function SobreMiComponent() {
  return (
    (<Card>
      <CardHeader>
        <CardTitle>Sobre Mí</CardTitle>
        <CardDescription>Conóceme más allá del código</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Mi Historia</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Soy un apasionado desarrollador web y estudiante de Licenciatura en Sistemas. Mi viaje en el mundo de la programación comenzó con la curiosidad por entender cómo funcionan las aplicaciones que usamos diariamente. Desde entonces, he estado inmerso en el aprendizaje continuo de nuevas tecnologías y mejores prácticas de desarrollo.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Mi fascinación por la tecnología me ha llevado a explorar diversos campos, desde el desarrollo web hasta la inteligencia artificial. Creo firmemente en el poder de la tecnología para resolver problemas y mejorar vidas, y es esta creencia la que impulsa mi pasión por crear soluciones innovadoras.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Educación</h3>
            <div className="mb-4">
              <h4 className="font-semibold">Licenciatura en Sistemas</h4>
              <p className="text-gray-600 dark:text-gray-300">Universidad XYZ, 2020 - Presente</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Promedio actual: 8.5/10</p>
            </div>
            <h3 className="text-xl font-semibold mb-2">Certificaciones</h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>Desarrollo Web Full Stack - Platzi</li>
              <li>React Avanzado - Udemy</li>
              <li>AWS Certified Cloud Practitioner</li>
            </ul>
          </div>
        </div>
        
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}>
          <h3 className="text-xl font-semibold mb-4">Lo que me define</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="pt-6">
                <Code className="w-12 h-12 mb-4 text-primary" />
                <h4 className="font-semibold mb-2">Aprendizaje Continuo</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Siempre buscando nuevas tecnologías y mejores prácticas para mejorar mis habilidades.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Briefcase className="w-12 h-12 mb-4 text-primary" />
                <h4 className="font-semibold mb-2">Experiencia Práctica</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  He trabajado en proyectos reales, aplicando mis conocimientos en situaciones del mundo real.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Lightbulb className="w-12 h-12 mb-4 text-primary" />
                <h4 className="font-semibold mb-2">Innovación</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Me encanta pensar fuera de la caja y encontrar soluciones creativas a problemas complejos.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
        
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}>
          <h3 className="text-xl font-semibold mb-4">Objetivos Profesionales</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Target className="w-5 h-5 mr-2 text-primary" />
              <span>Convertirme en un desarrollador full-stack senior en los próximos 3 años</span>
            </li>
            <li className="flex items-center">
              <Target className="w-5 h-5 mr-2 text-primary" />
              <span>Contribuir a proyectos de código abierto que tengan un impacto positivo en la comunidad</span>
            </li>
            <li className="flex items-center">
              <Target className="w-5 h-5 mr-2 text-primary" />
              <span>Especializarme en arquitecturas de microservicios y desarrollo de aplicaciones escalables</span>
            </li>
          </ul>
        </motion.div>
        
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}>
          <h3 className="text-xl font-semibold mb-4">Fuera del Mundo del Código</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Cuando no estoy frente a la pantalla, disfruto de:
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="text-sm py-1 px-2">
              <BookOpen className="w-4 h-4 mr-1" />
              Leer ciencia ficción
            </Badge>
            <Badge variant="secondary" className="text-sm py-1 px-2">
              <Coffee className="w-4 h-4 mr-1" />
              Explorar cafeterías locales
            </Badge>
            <Badge variant="secondary" className="text-sm py-1 px-2">
              <Briefcase className="w-4 h-4 mr-1" />
              Fotografía urbana
            </Badge>
            <Badge variant="secondary" className="text-sm py-1 px-2">
              <Lightbulb className="w-4 h-4 mr-1" />
              Participar en hackathons
            </Badge>
          </div>
        </motion.div>
      </CardContent>
    </Card>)
  );
}