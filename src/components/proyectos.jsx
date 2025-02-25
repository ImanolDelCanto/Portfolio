"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"
import Link from "next/link"

export function Proyectos() {
  const proyectos = [
    {
        "title": "Landing Page",
        "description": "Sitio web que muestra informacion sobre el negocio Alumbar y tiene una parte de catalogo de sus productos con sus precios ",
        "images": ["/media/alumbar.png"],
        "tags": ["React", "Next.js", "Tailwind CSS","TypeScript"],
        "url": "https://alumbaronline.com/"
    },
    {
      "title": "Landing Page",
      "description": "Sitio web que muestra qué son los vuelos bautismo y permite reservar para realizarlos.",
      "images": ["/media/FlightPage.png"],
      "tags": ["React", "Next.js", "Tailwind CSS"],
      "url": "https://vuelosdebautismos.vercel.app/"
  },
    {
        "title": "Sistema para emprendimiento",
        "description": "Sitio web en donde el usuario puede llevar el control de sus productos y ventas. Se conecta a una base de datos para mantener un registro en tiempo real. Fue creado para ser autoadministrable y no requerir conocimientos técnicos. (Realizado en base a mi prototipo).",
        "images": ["/media/sistem1 (1).png","/media/sistem1 (2).png","/media/sistem1 (4).png","/media/sistem1 (5).png","/media/sistem1 (6).png"],
        "tags": ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        "url": "https://github.com/Imaagus/stockManagmentCrochet"
    },
    {
        "title": "Aplicación de noticias",
        "description": "Aplicación que realiza consultas a una API mediante Retrofit y Moshi para obtener las últimas noticias. Posee una base de datos local a través de SharedPreferences, utilizada para guardar usuarios durante el registro y permitir que puedan iniciar sesión posteriormente. Desarrollada por 4 integrantes.",
        "images": ["/media/appview.png"],
        "tags": ["Kotlin"],
        "url": "https://github.com/Imaagus/Appnoticias"
    },
    {
        "title": "Sistema de gestión de stock",
        "description": "Sistema conectado a una base de datos Xata, donde una tabla almacena los productos y otra las categorías de estos. Permite realizar el CRUD de manera sencilla, registrar ventas y consultar cuánto se ha vendido de cada producto, así como el total recaudado. Su objetivo es simplificar el control de productos para el usuario. Aún está en desarrollo (se agregarán inicio de sesión, permisos y más funcionalidades). Utiliza Herramienta v0.",
        "images": ["/media/sistemManag.png"],
        "tags": ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        "url": "https://github.com/Imaagus/stockManagement"
    },
    {
        "title": "Sistema de cabañas",
        "description": "Sistema cuyo objetivo es registrar las reservas de unas cabañas, guardando los datos en una base de datos. Su propósito es simplificar la tarea de gestionar las cabañas con una interfaz sencilla pero útil. Aún está en desarrollo (faltan funcionalidades). Utiliza Herramienta v0.",
        "images": ["/media/cabinManag.png"],
        "tags": ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        "url": "https://github.com/Imaagus/-cabinManagement"
    },
    {
        "title": "Juego de preguntas y respuestas",
        "description": "Juego de preguntas sobre fútbol desarrollado en el lenguaje C. Implementa lectura de archivos, estructuras, y otras funcionalidades.",
        "images": ["/media/c.jpg"],
        "tags": ["C"],
        "url": "https://github.com/Imaagus/QuizGame"
    },
    {
        "title": "Sistema de aeropuerto con menú",
        "description": "Sistema que utiliza listas, pilas y colas para crear, mostrar y administrar aviones, sus mantenimientos y los vuelos realizados por estos.",
        "images": ["/media/c.jpg"],
        "tags": ["C"],
        "url": "https://github.com/Imaagus/trabajoPractico"
    }
]

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {proyectos.map((project, index) => (
        <Card key={index} className="flex flex-col h-full">
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col flex-grow justify-between">
            <div className="relative w-full mb-4">
              <Carousel className="w-full">
                <CarouselContent>
                  {project.images.map((img, imgIndex) => (
                    <CarouselItem key={imgIndex}>
                      <Image
                        src={img || "/placeholder.svg"}
                        alt={`${project.title} - Image ${imgIndex + 1}`}
                        width={1000}
                        height={1000}
                        className="h-72 w-full object-cover object-top rounded-md"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {project.images.length > 1 && (
                  <>
                    <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
                    <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
                  </>
                )}
              </Carousel>
            </div>
            <div className="flex flex-wrap gap-2 mb-4 items-center">
              {project.tags.map((tag, tagIndex) => (
                <Badge key={tagIndex} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <Link href={project.url} target="_blank">
              <Button className="w-full">Ver Proyecto</Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

