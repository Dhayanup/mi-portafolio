"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
      {/* Fondo tecnológico animado */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent"></div>
      </div>

      {/* Efectos de luz */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Foto de perfil */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <Image
                  src="/placeholder.svg?height=256&width=256"
                  alt="Dhayann Uzcategui"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20 blur-lg animate-pulse"></div>
            </div>
          </div>

          {/* Información principal */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">FULL STACK DEVELOPERS</h1>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8 border-b-4 border-white inline-block pb-2">
              DHAYANN UZCATEGUI
            </h2>
          </div>

          {/* Información de contacto */}
          <div className="flex-shrink-0 text-right text-white space-y-2">
            <p className="text-xl">(+54) 9383403167</p>
            <p className="text-xl">dhayanup@gmail.com</p>
            <p className="text-lg">https://demoportafolio.netlify.app</p>
          </div>
        </div>

        {/* Botón Empezar */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-12 py-4 text-xl rounded-full transition-all duration-300"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            Empezar
          </Button>
        </div>
      </div>
    </section>
  )
}
