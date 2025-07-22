import Image from "next/image"

export default function AboutSection() {
  return (
    <section >

      <div className="container flex justify-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">INFORMACIÓN PERSONAL</h2>

          <div className="grid lg:grid-cols-2 gap-12 md:items-center ">
            {/* Foto de perfil */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-80 h-96 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=384&width=320"
                  alt="Dhayann Uzcategui"
                  width={320}
                  height={384}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Información */}
            <div className=" mx-4 !m-6 text-justify" >
              <p className="text-lg leading-relaxed ">
                Bienvenidos, soy Ingeniero de Sistemas Full Stack especializado en diseño web Front-End siempre a la
                vanguardia de las tecnologías y manteniéndome en capacitación constante.
              </p>

              <div>
                <h3 className="text-xl font-bold mb-3 text-green-400">Formación académica:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>-Universidad Nacional Experimental Politécnica de las Fuerza Armada.</li>
                  <li>-freecodecamp.org</li>
                  <li>-Centro de formación Maracay.</li>
                  <li>-SoyHenry.com</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-green-400">Hard Skills:</h3>
                <p className="text-gray-300 leading-relaxed">
                  HTML, CSS, JavaScript, TypeScript, Figma, JQuery, JSON, AJAX, Testing, React.js, Vue.js, Bootstrap
                  (framework), Posicionamiento en buscadores (SEO), Análisis de sistemas, Bases de datos, Control de
                  versiones, Desarrollo web, Diseño responsive, Interfaz, Git, GitHub, UI/UX, MongoDB, MySQL, MongoDB,
                  PostgreSQL, Comercio WooCommerce WordPress, Express, Axios, Node.js, Tailwind CSS, Netlify, Vercel,
                  Visual Studio Code, Scrum, Agile, Trello, Jira.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-green-400">Soft Skills:</h3>
                <p className="text-gray-300 leading-relaxed">
                  -Habilidad para trabajar en equipo, así como también para establecer relaciones interpersonales,
                  dinámicas, creativas, con experiencia en la atención al cliente.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-green-400">Objetivo:</h3>
                <p className="text-gray-300 leading-relaxed">
                  -Emprender una trayectoria en una organización de operación nacional y/o internacional, que necesite
                  de mis conocimientos y habilidades, orientados hacia el crecimiento dinámico de la misma, en el área
                  de front-End en donde pueda desarrollarme.
                </p>
              </div>

              <div className="pt-4">
                <a href="#" className="text-green-400 hover:text-green-300 underline transition-colors">
                  Visualizar Curriculum AQUÍ.
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
