'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SobreMiComponent } from './sobre-mi'
import { Habilidades } from './habilidades'
import { Proyectos } from './proyectos'
import { Contacto } from './contacto'
import { Footer } from './footer'
import { Header } from './header'

export function PortafolioMejoradoComponent() {
  const [activeTab, setActiveTab] = useState('sobre-mi')
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5 }
  }

  return (
    (<div
      className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <header className="container mx-auto px-4 py-8">
        <Header />
      </header>
      <main className="container mx-auto px-4 mb-16">
        <Tabs defaultValue="sobre-mi" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="sobre-mi">Sobre Mí</TabsTrigger>
            <TabsTrigger value="habilidades">Habilidades</TabsTrigger>
            <TabsTrigger value="proyectos">Proyectos</TabsTrigger>
            <TabsTrigger value="contacto">Contacto</TabsTrigger>
          </TabsList>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={fadeIn}>
              <TabsContent value="sobre-mi">
                <SobreMiComponent />
              </TabsContent>
              <TabsContent value="habilidades">
                <Habilidades />
              </TabsContent>
              <TabsContent value="proyectos">
                <Proyectos />
              </TabsContent>
              <TabsContent value="contacto">
                <Contacto />
              </TabsContent>
            </motion.div>
          </AnimatePresence>
        </Tabs>
      </main>
      <footer className="bg-gray-100 dark:bg-gray-900 py-12">
        <Footer/>
      </footer>
    </div>)
  );
}