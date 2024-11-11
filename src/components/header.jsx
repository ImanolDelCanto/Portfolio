import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Moon, Sun, Download } from "lucide-react"

export function Header(){
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
        document.documentElement.classList.toggle('dark')
      }
    const [theme, setTheme] = useState('light')
        useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light'
        setTheme(savedTheme)
        document.documentElement.classList.toggle('dark', savedTheme === 'dark')
    }, [])
    return(
        <div>
            <nav className="flex justify-between items-center mb-8">
            <motion.h1
                className="text-3xl font-bold"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}>
                Tu Nombre
            </motion.h1>
            <div className="flex items-center space-x-4">
                <Button variant="outline" size="icon" onClick={toggleTheme}>
                {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                </Button>
                <Button variant="outline">
                <Download className="mr-2 h-4 w-4" /> CV
                </Button>
            </div>
            </nav>
            <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}>
            <h2 className="text-4xl font-bold mb-4">Desarrollador Full Stack</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Estudiante de Licenciatura en Sistemas | Especializado en React y Tecnologías Web Modernas
            </p>
            </motion.div>
        </div>
    );
}