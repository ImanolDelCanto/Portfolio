'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image";
import Link from "next/link";




export function Proyectos() {
    return(
        <div className="grid gap-6 md:grid-cols-2">
            {[
                {
                title: "Landing Page",
                description: "Sitio web el cual muestra que son los vuelos bautismos y permite reservar para realizarlos",
                image: "/media/FlightPage.png",
                tags: ["React","Next.js","Tailwind CSS"],
                url: "https://vuelosdebautismos.vercel.app/"
                },
                {
                title: "Aplicacion de noticias",
                description: "Aplicación la cual se realiza consultas a una api mediante Retrofit y Moshi para tener las ultimas noticias. Posee una base de datos local mediante el SharedPreferences el cual utilizamos para guardar usarios en el registro y que puedan logearse luego. Desarrollada por 4 integrantes.",
                image: "/media/appview.png",
                tags: ["Kotlin"],
                url: "https://github.com/Imaagus/Appnoticias"
                }
                ].map((project, index) => (
                <Card key={index} className="flex flex-col h-full">
                    <CardHeader>
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-grow justify-between ">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={1000} 
                          height={1000}
                          className="h-72 w-full object-cover object-top rounded-md mb-4"/>
                        <div className="flex flex-wrap gap-2 mb-4 items-center">
                          {project.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                          ))}
                        </div>
                        <Link href={project.url} target="_blank"><Button className="w-full">Ver Proyecto</Button></Link>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}