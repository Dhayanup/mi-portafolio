import { Github, GitBranch, MessageCircle, Coffee, Eye } from "lucide-react"

const technologies = [
  {
    icon: (
      <div className="w-16 h-16 bg-orange-500 rounded flex items-center justify-center text-white text-2xl font-bold">
        HTML
      </div>
    ),
    name: "HTML",
    description: "Lenguaje de marcado de hipertexto",
  },
  {
    icon: (
      <div className="w-16 h-16 bg-blue-500 rounded flex items-center justify-center text-white text-2xl font-bold">
        CSS
      </div>
    ),
    name: "CSS",
    description: "Apariencia y diseño web",
  },
  {
    icon: (
      <div className="w-16 h-16 bg-yellow-500 rounded flex items-center justify-center text-black text-2xl font-bold">
        JS
      </div>
    ),
    name: "JAVASCRIPT",
    description: "Mejor apariencia y páginas dinámicas.",
  },
  {
    icon: <Github className="w-16 h-16 text-white" />,
    name: "GITHOT",
    description: "Almacenamiento en la nube y trabajos grupales",
  },
  {
    icon: <GitBranch className="w-16 h-16 text-white" />,
    name: "GIT",
    description: "control de versiones y trabajos grupales",
  },
  {
    icon: <MessageCircle className="w-16 h-16 text-pink-500" />,
    name: "HABLAR CON DESARO A",
    description: "Mejor manera de trabajo para diseñar",
  },
  {
    icon: <Coffee className="w-16 h-16 text-orange-600" />,
    name: "JAVA",
    description: "Lenguaje orientado a objetos",
  },
  {
    icon: <Eye className="w-16 h-16 text-purple-500" />,
    name: "CÓDIGO DE ESTUDIO VISUAL",
    description: "Editor de código",
  },
]

export default function TechnologiesSection() {
  return (
    <section id="technologies" className=" py-20 ">
      <div className="container flex  justify-center !my-5 mx-auto px-4 ">
        <div className=" max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 place-items-center">
            {/* Título */}
            <div>
              <h2 className="text-4xl font-bold text-white leading-tight">
                Tecnologías de lenguajes de programación implementadas
              </h2>
            </div>

            {/* Grid de tecnologías */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-colors duration-300 border border-gray-700"
                >
                  <div className="flex justify-center mb-4">{tech.icon}</div>
                  <h3 className="text-white font-bold mb-2">{tech.name}</h3>
                  <p className="text-gray-400 text-sm">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Botón Saber más */}
          <div className="text-center  !mt-12">
            <button className="bg-transparent border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white !px-8 !py-3 rounded-full transition-all duration-300">
              Saber más
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
