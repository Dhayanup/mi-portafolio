"use client"

export default function Navigation() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-700 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-8 py-4">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-gray-400 hover:text-white transition-colors duration-300 font-medium"
          >
            INICIO
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-gray-400 hover:text-white transition-colors duration-300 font-medium"
          >
            PROYECTOS
          </button>
          <button
            onClick={() => scrollToSection("technologies")}
            className="text-gray-400 hover:text-white transition-colors duration-300 font-medium"
          >
            TECNOLOGÍAS
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-gray-400 hover:text-white transition-colors duration-300 font-medium"
          >
            CONTÁCTAME
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-gray-400 hover:text-white transition-colors duration-300 font-medium"
          >
            GALERÍA
          </button>
        </div>
      </div>
    </nav>
  )
}
