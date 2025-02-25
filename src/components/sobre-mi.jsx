'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, BookOpen, Briefcase, Lightbulb, Target, Coffee, Car, BicepsFlexed, LucideGamepad2 } from "lucide-react"

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
              Comencé a estudiar Sistemas porque es un mundo donde todo lo que imagino y pienso puede transformarse en algo real. Me gusta creer que en el ámbito de la tecnología no existen límites para lo que se puede lograr. Me apasiona la idea de brindar soluciones a problemas de la vida cotidiana a través de sistemas, ya que creo que, casi siempre, estos pueden ser resueltos mediante la tecnología. 
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Actualmente me encuentro estudiando la Licenciatura de Sistemas lo cual me ha dado muchas herramientas para poder hacer lo que mas me gusta, desarrollar sistemas. Al mismo tiempo aprendo de manera autonoma diferentes tegnologias actuales para poder seguir creciendo profesionalmente y solucionar de la manera mas eficiente los distintos desafios que me propongo.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Creo que la clave para el éxito en este mundo de los sistemas es combinar creatividad, aprendizaje continuo y pasión por resolver problemas.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Hoy en dia estoy me encuentro creando GretSoft, pero estoy abierto a propuestas. 
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Educación</h3>
            <div className="mb-4">
              <h4 className="font-semibold">Licenciatura en Sistemas</h4>
              <p className="text-gray-600 dark:text-gray-300">Universidad Nacional de Lanus, 2023 - Presente</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Promedio actual: 8.0/10</p>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold">Ingles (B2)</h4>
              <p className="text-gray-600 dark:text-gray-300">Instituto Lenguas Vivas, 2015 - 2022 </p>
            </div>
            <h3 className="text-xl font-semibold mb-2">Certificaciones</h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>Desarrollo Web - CoderHouse</li>
              <li>JavaScript - CoderHouse</li>
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
                <Code className="w-12 h-12 mb-4" />
                <h4 className="font-semibold mb-2">Aprendizaje Continuo</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Siempre buscando nuevas tecnologías y mejores prácticas para mejorar mis habilidades.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Briefcase className="w-12 h-12 mb-4" />
                <h4 className="font-semibold mb-2">Experiencia Práctica</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  He trabajado en proyectos personales y reales, aplicando mis conocimientos en situaciones del mundo real.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Lightbulb className="w-12 h-12 mb-4" />
                <h4 className="font-semibold mb-2">Innovación</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                Me encanta pensar más allá de lo tradicional y brindar soluciones eficaces, innovadoras y prácticas.
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
              <Target className="w-5 h-5 mr-2 " />
              <span>Convertirme en un Desarrollador de Software senior</span>
            </li>
            <li className="flex items-center">
              <Target className="w-5 h-5 mr-2" />
              <span>Poder contribuir en grandes proyectos</span>
            </li>
            <li className="flex items-center">
              <Target className="w-5 h-5 mr-2" />
              <span>Especializarme en Java Spring Boot</span>
            </li>
            <li className="flex items-center">
              <Target className="w-5 h-5 mr-2" />
              <span>Poder liderar mi propio equipo de Desarrollo</span>
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
              Leer 
            </Badge>
            <Badge variant="secondary" className="text-sm py-1 px-2">
              <Briefcase className="w-4 h-4 mr-1" />
              Viajar
            </Badge>
            <Badge variant="secondary" className="text-sm py-1 px-2">
              <Car className="w-4 h-4 mr-1" />
              Aprender de mecanica
            </Badge>
            <Badge variant="secondary" className="text-sm py-1 px-2">
              <BicepsFlexed  className="w-4 h-4 mr-1" />
              Hacer ejercicio
            </Badge>
            <Badge variant="secondary" className="text-sm py-1 px-2">
              <LucideGamepad2  className="w-4 h-4 mr-1" />
              Jugar VideoJuegos
            </Badge>
          </div>
        </motion.div>
      </CardContent>
    </Card>)
  );
}