"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-red-600">
              Carteles Salta
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("sobre-nosotros")}
              className="flex items-center text-gray-700 hover:text-red-600 transition-colors"
            >
              <Users className="w-4 h-4 mr-1" />
              Sobre Nosotros
            </button>
            <button
              onClick={() => scrollToSection("ubicaciones")}
              className="flex items-center text-gray-700 hover:text-red-600 transition-colors"
            >
              <MapPin className="w-4 h-4 mr-1" />
              Ubicaciones
            </button>
            <button
              onClick={() => scrollToSection("carteles")}
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              Carteles
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              Contacto
            </button>
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="text-left text-lg text-gray-700 hover:text-red-600 transition-colors"
                >
                  Inicio
                </button>
                <button
                  onClick={() => scrollToSection("sobre-nosotros")}
                  className="flex items-center text-left text-lg text-gray-700 hover:text-red-600 transition-colors"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Sobre Nosotros
                </button>
                <button
                  onClick={() => scrollToSection("ubicaciones")}
                  className="flex items-center text-left text-lg text-gray-700 hover:text-red-600 transition-colors"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Ubicaciones
                </button>
                <button
                  onClick={() => scrollToSection("carteles")}
                  className="text-left text-lg text-gray-700 hover:text-red-600 transition-colors"
                >
                  Carteles
                </button>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="text-left text-lg text-gray-700 hover:text-red-600 transition-colors"
                >
                  Contacto
                </button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
