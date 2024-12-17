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
                },
                {
                title: "Sistema de gestion de stock",
                description: "Es un sistema el cual esta conectado a una base de datos xata donde en una tabla se almacenan los productos y en la otra las categorias de los productos, el sistema nos permite realizar el CRUD de manera sencilla. Tambien sirve para registrar ventas y poder ver cuanto se vendio de un producto y el total recaudado. El objetivo de este sistema es simplificarle al usuario el llevar un control sobre los productos. Aun esta en desarrollo (Va a tener inicio de secion y permisos, y mas funcionalidades). Se uso Herramienta v0",
                image: "/media/sistemManag.png",
                tags: ["React","Next.js","TypeScript","Tailwind CSS"],
                url: "https://stockmanagement-hazel.vercel.app/"
                },
                {
                title: "Sistema de cabañas",
                description: "Sistema el cual tiene como objetivo poder llevar el registro de reservas de unas cabañas guardando los datos de estas reservas en la base de datos, lo que se quiere lograr con este sistema es simplificar la tarea de gestionar las cabañas con una ui sencilla pero util. Aun esta en desarrollo(faltan funcionalidades). Se uso Herramienta v0",
                image: "/media/cabinManag.png",
                tags: ["React","Next.js","TypeScript","Tailwind CSS"],
                url: "https://cabin-management.vercel.app/"
                },
                {
                title: "Juego de preguntas y respuestas",
                description: "Juego de preguntas sobre el futbol desarrollado en el lenguaje C. Lectura de archivos, estructuras y demas cosas.",
                image: "/media/c.jpg",
                tags: ["C"],
                url: "https://github.com/Imaagus/QuizGame"
                },
                {
                title: "Sistema de Aeropuerto con menu",
                description: "Sistema donde se utilizan listas, pilas y colas para crear, mostrar y administrar aviones, mantenimientos de estos y vuelos que de los aviones",
                image: "/media/c.jpg",
                tags: ["C"],
                url: "https://github.com/Imaagus/trabajoPractico"
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