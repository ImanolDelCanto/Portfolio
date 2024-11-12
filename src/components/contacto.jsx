'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail} from "lucide-react"

export function Contacto(){
    return(
        <Card>
            <CardHeader>
                <CardTitle>Contacto</CardTitle>
                <CardDescription>¡Estoy siempre abierto a nuevas oportunidades y colaboraciones!</CardDescription>
            </CardHeader>
                <CardContent>
                <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                    <label htmlFor="name"className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nombre</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-600"
                        required />
                    </div>
                    <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-600"
                        required />
                    </div>
                </div>
                    <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Mensaje</label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-600"
                        required></textarea>
                    </div>
                    <Button type="submit" className="w-full">Enviar Mensaje</Button>
                </form>
                    <div className="mt-8">
                      <h3 className="text-xl font-semibold mb-4">Conéctate conmigo</h3>
                      <div className="flex space-x-4">
                        <Button variant="outline" size="icon">
                          <a href="https://github.com/Imaagus" target="_blank" >
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button variant="outline" size="icon">
                          <a href="https://www.linkedin.com/in/imanol-del-canto-10135024a/" target="_blank">
                            <Linkedin className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button variant="outline" size="icon">
                          <a href="mailto:imaaugus04@gmail.com">
                            <Mail className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                </CardContent>
        </Card>
    )
}