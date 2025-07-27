"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Eye, MapPin } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" className="pt-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Publicidad que <span className="text-red-600">se ve</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Alquila carteles publicitarios en las mejores ubicaciones de la ciudad. Maximiza el alcance de tu marca
                con nuestra red de carteles estratégicamente ubicados.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700" onClick={() => scrollToSection("carteles")}>
                Alquilar
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection("ubicaciones")}>
                <MapPin className="mr-2 h-5 w-5" />
                Ver Ubicaciones
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">300+</div>
                <div className="text-sm text-gray-600">Carteles Activos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">25</div>
                <div className="text-sm text-gray-600">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">1M+</div>
                <div className="text-sm text-gray-600">Impresiones Diarias</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl shadow-2xl overflow-hidden">
              <img
                src="/placeholder.svg?height=600&width=600"
                alt="Cartel publicitario en la ciudad"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <Eye className="h-5 w-5 text-red-600" />
                <span className="text-sm font-medium">Alta visibilidad garantizada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
