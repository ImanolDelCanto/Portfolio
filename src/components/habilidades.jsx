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
                        {['React', 'Next.js', 'TypeScript', 'Tailwind CSS'].map((skill) => (
                          <div key={skill} className="mb-4">
                            <div className="flex justify-between mb-1">
                              <span className="text-base font-medium text-gray-700 dark:text-gray-300">{skill}</span>
                              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">85%</span>
                            </div>
                            <Progress value={85} className="w-full" />
                          </div>
                        ))}
                    </div>
                    <div>
                    <h3 className="text-xl font-semibold mb-4">Tecnologías Backend</h3>
                        {['Node.js', 'Express', 'PostgreSQL', 'MongoDB'].map((skill) => (
                          <div key={skill} className="mb-4">
                            <div className="flex justify-between mb-1">
                              <span className="text-base font-medium text-gray-700 dark:text-gray-300">{skill}</span>
                              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">75%</span>
                            </div>
                            <Progress value={75} className="w-full" />
                          </div>
                        ))}
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