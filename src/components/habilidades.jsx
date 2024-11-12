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
                        <Badge>React</Badge>
                        <Badge>Next.js</Badge>
                        <Badge>TypeScript</Badge>
                        <Badge>Tailwind CSS</Badge>
                      </div>
                    </div>
                    <div>
                    <h3 className="text-xl font-semibold mb-4">Tecnologías Backend</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge>Node.js</Badge>
                        <Badge>Express</Badge>
                        <Badge>PostgreSQL</Badge>
                        <Badge>MongoDB</Badge>
                      </div>
                    </div>
                </div>
                <div className="mt-6">
                <h3 className="text-xl font-semibold mb-4">Otras Habilidades</h3>
                    <div className="flex flex-wrap gap-2">
                        <Badge>Git</Badge>
                        <Badge>Docker</Badge>
                        <Badge>CI/CD</Badge>
                        <Badge>Agile/Scrum</Badge>
                        <Badge>UI/UX Design</Badge>
                        <Badge>RESTful APIs</Badge>
                        <Badge>GraphQL</Badge>
                        <Badge>Jest</Badge>
                    </div>
                </div>
                </CardContent>
         </Card>
    );
}