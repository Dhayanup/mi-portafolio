import Image from "next/image"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "CatPhotoApp",
    subtitle: "Aplicación de Gatos",
    image: "/placeholder.svg?height=200&width=300",
    type: "app",
  },
  {
    title: "Registration Form",
    subtitle: "Formulario de registro",
    image: "/placeholder.svg?height=200&width=300",
    type: "form",
  },
  {
    title: "CSS Color Markers",
    subtitle: "Marcadores",
    image: "/placeholder.svg?height=200&width=300",
    type: "css",
  },
  {
    title: "CAMPER CAFE",
    subtitle: "Menú de cafetería",
    image: "/placeholder.svg?height=200&width=300",
    type: "menu",
  },
  {
    title: "ÚLTIMOS AGREGADOS",
    subtitle: "Flecha",
    image: "/placeholder.svg?height=200&width=300",
    type: "design",
  },
  {
    title: "Prueba Laboral",
    subtitle: "",
    image: "/placeholder.svg?height=200&width=300",
    type: "test",
  },
  {
    title: "Crear tarjetas",
    subtitle: "",
    image: "/placeholder.svg?height=200&width=300",
    type: "cards",
  },
  {
    title: "Página Entretenimiento",
    subtitle: "En construcción",
    image: "/placeholder.svg?height=200&width=300",
    type: "construction",
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">PORTAFOLIO</h2>
            <p className="text-gray-400 text-lg">Conoce mis proyectos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-video relative">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-1">{project.title}</h3>
                  {project.subtitle && <p className="text-gray-600 text-sm mb-4">{project.subtitle}</p>}
                  <Button className="w-full bg-transparent border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white rounded-full">
                    Saber más
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
