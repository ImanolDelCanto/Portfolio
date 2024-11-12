'use client'
import { Github, Linkedin, Mail} from "lucide-react"

export function Footer(){
    return(
    <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
                <h3 className="text-lg font-semibold mb-4">Tu Nombre</h3>
                <p className="text-gray-600 dark:text-gray-300">Desarrollador Full Stack especializado en crear experiencias web únicas y funcionales.</p>
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
                <ul className="space-y-2">
                    <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">Inicio</a></li>
                    <li><a href="Proyectos" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">Proyectos</a></li>
                    <li><a href="#contacto" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">Contacto</a></li>
                </ul>
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-4">Conecta</h3>
                <div className="flex space-x-4">
                <a href="https://github.com/Imaagus" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
                  <Github className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/in/imanol-del-canto-10135024a/" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="mailto:imaaugus04@gmail.com"  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
                  <Mail className="h-6 w-6" />
                </a>
                </div>
            </div>
        </div>
        <div
            className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
            <p className="text-gray-600 dark:text-gray-300">© {new Date().getFullYear()} Imanol Del Canto. Todos los derechos reservados.</p>
        </div>
    </div>
    );
}