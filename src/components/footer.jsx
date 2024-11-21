'use client'
import { Github, Linkedin, Mail} from "lucide-react"
import Link from "next/link";

export function Footer({ setActiveTab }){
    return(
    <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
                <h3 className="text-lg font-semibold mb-4">Imanol Del Canto</h3>
                <p className="text-gray-600 dark:text-gray-300">Desarrollador Junior especializandome en Java Spring Boot.</p>
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
                <ul className="space-y-2">
                    <li><Link href="#sobremi" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100" onClick={()=> setActiveTab('sobremi')}>Inicio</Link></li>
                    <li><Link href="#proyectos" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100" onClick={()=> setActiveTab('proyectos')} >Proyectos</Link></li>
                    <li><Link href="#contacto" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100" onClick={() => setActiveTab('contacto')}>
                    Contacto</Link></li>
                </ul>
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-4">Conecta</h3>
                <div className="flex space-x-4">
                <Link href="https://github.com/Imaagus" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
                  <Github className="h-6 w-6" />
                </Link>
                <Link href="https://www.linkedin.com/in/imanol-del-canto-10135024a/" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link href="mailto:imaaugus04@gmail.com"  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
                  <Mail className="h-6 w-6" />
                </Link>
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