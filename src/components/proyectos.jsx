'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"


export function Proyectos() {
    return(
        <div className="grid gap-6 md:grid-cols-2">
            {[
                {
                title: "Landing Page",
                description: "Sitio web el cual muestra que son los vuelos bautismos y permite reservar para realizarlos",
                image: "/placeholder.svg?height=200&width=400",
                tags: ["Next.js", "Stripe", "Tailwind CSS", "PostgreSQL"]
                },
                {
                title: "Task Management App",
                description: "Aplicación de gestión de tareas con autenticación y tiempo real usando Firebase",
                image: "/placeholder.svg?height=200&width=400",
                tags: ["React", "Firebase", "Material-UI"]
                },
                {
                title: "Portfolio Website",
                description: "Sitio web de portafolio personal con animaciones suaves y diseño responsivo",
                image: "/placeholder.svg?height=200&width=400",
                tags: ["React", "Framer Motion", "Tailwind CSS"]
                },
                {
                title: "Weather Forecast App",
                description: "Aplicación de pronóstico del tiempo con geolocalización y visualización de datos",
                image: "/placeholder.svg?height=200&width=400",
                tags: ["React Native", "OpenWeatherMap API", "Chart.js"]
                }
                ].map((project, index) => (
                <Card key={index}>
                    <CardHeader>
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 object-cover rounded-md mb-4" />
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                          ))}
                        </div>
                        <Button className="w-full">Ver Proyecto</Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}