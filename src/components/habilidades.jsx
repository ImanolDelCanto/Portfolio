'use client'

import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"


export function Habilidades() {
    return(
        <Card>
            <CardHeader>
                <CardTitle>Mis Habilidades</CardTitle>
                  </CardHeader>
                <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Tecnologías Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                        <Badge className="gap-1"><img src="/react.svg" alt="react icon" className="w-6"/>React</Badge>
                        <Badge className="gap-1"><img src="/next.js.svg" alt="next icon" className="w-5"/>Next.js</Badge>
                        <div className="flex gap-1">                      
                        <Badge className="gap-1"><img src="/javaScript.svg" alt="javascript icon" className="w-6"/>JavaScript</Badge>
                        </div>
                        <Badge className="gap-1"><img src="/tailwind.svg" alt="tailwind icon" className="w-6"/>Tailwind CSS</Badge>
                      </div>
                    </div>
                    <div>
                    <h3 className="text-xl font-semibold mb-4">Tecnologías Backend</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="gap-1"><img src="/MySQL.svg" alt="sql icon" className="w-6"/>MySQL</Badge>
                      </div>
                    </div>
                    <div>
                    <h3 className="text-xl font-semibold mb-4">Tecnologías de desarrollo de Software</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="gap-1"><img src="/c.svg" alt="c icon" className="w-5"/>C</Badge>
                        <Badge className="gap-1"><img src="/kotlin.svg" alt="kotlin icon" className="w-5"/>Kotlin</Badge>
                      </div>
                    </div>
                </div>
                <div className="mt-6">
                <h3 className="text-xl font-semibold mb-4">Otras Habilidades</h3>
                    <div className="flex flex-wrap gap-2">
                        <Badge className="gap-1"><img src="/git.svg" alt="git icon" className="w-5"/>Git</Badge>
                        <Badge className="gap-1">RESTful APIs</Badge>
                        <Badge className="gap-1">MySQL Workbench</Badge>
                        <Badge className="gap-1">ADOO</Badge>
                        <Badge className="gap-1">UML</Badge>
                        <Badge className="gap-1">Desarrollo mobile</Badge>
                        <Badge className="gap-1">Agile/Scrum/Kanban</Badge>
                        <Badge className="gap-1">Cloud computing</Badge>
                        <Badge className="gap-1">Trabajo en equipo</Badge>
                    </div>
                </div>
                </CardContent>
         </Card>
    );
}