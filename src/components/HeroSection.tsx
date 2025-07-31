"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative max-h-screen flex items-center justify-center  overflow-hidden">

      {/* Fondo tecnológico animado */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover "
          src="/imagen/1100129209-preview.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>


      <div className="relative z-10 container mx-auto px-4">
        <div className="relative flex flex-col md:flex lg:flex-row items-center justify-between lg:m-0 ">

          {/* Foto de perfil */}
              <div className="h-150 w-screen min-md:w-72">
                <Image
                  src="/images/dhayan2.2.png"
                  alt="Dhayann Uzcategui"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"/>
              </div>
              <div className="absolute bottom-0 max-w-screen md:-z-10">
                <video
          className="w-full h-full object-cover "
          src="/imagen/datafoto.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
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
