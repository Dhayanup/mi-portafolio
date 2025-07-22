import { Mail, MessageCircle, Phone, Github, Instagram, Linkedin } from "lucide-react"

const contactOptions = [
  {
    icon: <Mail className="w-12 h-12 text-red-500" />,
    title: "Envíame un correo",
    action: "mailto:dhayanup@gmail.com",
  },
  {
    icon: <MessageCircle className="w-12 h-12 text-blue-500" />,
    title: "Contactar en Telegrama",
    action: "https://t.me/dhayann",
  },
  {
    icon: <Phone className="w-12 h-12 text-green-500" />,
    title: "Contáctame por WhatsApp",
    action: "https://wa.me/5493834031676",
  },
  {
    icon: <Github className="w-12 h-12 text-white" />,
    title: "Consígueme en GitHub",
    action: "https://github.com/dhayann",
  },
  {
    icon: <Instagram className="w-12 h-12 text-pink-500" />,
    title: "Sígueme en Instagram",
    action: "https://instagram.com/dhayann",
  },
  {
    icon: <Linkedin className="w-12 h-12 text-blue-600" />,
    title: "Conoce más a través de LinkedIn",
    action: "https://linkedin.com/in/dhayann",
  },
]

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Contáctame</h2>
            <p className="text-gray-400 text-lg">Forma directa a través de los siguientes canales</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactOptions.map((option, index) => (
              <a
                key={index}
                href={option.action}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-8 rounded-lg text-center hover:bg-gray-700 transition-colors duration-300 border border-gray-700 group"
              >
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {option.icon}
                </div>
                <h3 className="text-white font-semibold">{option.title}</h3>
              </a>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-500">©Copyright 2022 de Dhayann Uzcategui. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
