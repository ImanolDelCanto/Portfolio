'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image";


export function Habilidades() {
  const habilidades = [
    {
    categoria:"Tecnologías Frontend",
    tecnologias: [ 
      {
        src:"/react.svg",
        alt:"react icon",
        nombre: "React"
      },{
        src:"/next-js.svg",
        alt: "next icon",
        nombre: "Next.js"
      },{
        src:"/javaScript.svg",
        alt:"javascript icon",
        nombre:"JavaScript"
      },{
        src:"/tailwind.svg",
        alt:"tailwind icon",
        nombre:"Tailwind CSS"
      }
    ]
    },
    {
    categoria: "Tecnologías Backend",
    tecnologias: [
      {
        src:"/my-sql.svg",
        alt:"MySQL icon",
        nombre:"MySQL"
      }
    ]
    },{
      categoria: "Tecnologías de desarrollo de Software",
      tecnologias: [
        {
          src:"/c.svg",
          alt:"C icon",
          nombre:"C"
        },{
          src:"/kotlin.svg" ,
          alt:"Kotlin icon",
          nombre:"Kotlin"
        }
      ]
    }]; 
  const otrasHabilidades =[
    {
      categoria: "Otras Habilidades",
      otros: [
        {
          src:"/git.svg",
          alt: "git icon",
          nombre: "git"
        },{
          nombre: "RESTful APIs"
        },{
          nombre: "MySQL Workbench"
        },{
          nombre: "ADOO"
        },{
          nombre: "UML"
        },{
          nombre: "Desarrollo mobile"
        },{
          nombre: "Agile/Scrum/Kanban"
        },{
          nombre: "Cloud computing"
        },{
          nombre: "Trabajo en equipo"
        }
      ]
    }
  ];
  
    return(
        <Card>
            <CardHeader>
                <CardTitle>Mis Habilidades</CardTitle>
                  </CardHeader>
                <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {habilidades.map((habilidad, index) => (
                    <div key={index}>
                      <h3 className="text-xl font-semibold mb-4">{habilidad.categoria}</h3>
                      <div className="flex flex-wrap gap-2">
                        {habilidad.tecnologias.map((tecnologia, i) => (
                          <Badge key={i} className="gap-1 p-1 px-2">
                            <Image
                              src={tecnologia.src}
                              alt={tecnologia.alt}
                              width={20}
                              height={20}
                            />
                            {tecnologia.nombre}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  {otrasHabilidades.map((habilidad, index) => (
                    <div key={index}>
                      <h3 className="text-xl font-semibold mb-4">{habilidad.categoria}</h3>
                      <div className="flex flex-wrap gap-2">
                        {habilidad.otros.map((otro,i) =>(
                          <Badge key={i} className="gap-1 p-1 px-2">
                            { otro.src &&
                              <Image 
                              src={otro.src}
                              alt={otro.alt}
                              width={20}
                              height={20}
                              />
                            }
                            {otro.nombre}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    ))}
                </div>
                </CardContent>
         </Card>
    );
}