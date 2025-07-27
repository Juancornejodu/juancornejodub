import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Información de la empresa */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-red-400">Carteles Salta</h3>
            <p className="text-gray-300">
              Líderes en alquiler de carteles publicitarios en vía pública. Más de 15 años conectando marcas con su
              audiencia.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#inicio" className="text-gray-300 hover:text-red-400 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#sobre-nosotros" className="text-gray-300 hover:text-red-400 transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="#ubicaciones" className="text-gray-300 hover:text-red-400 transition-colors">
                  Ubicaciones
                </Link>
              </li>
              <li>
                <Link href="#carteles" className="text-gray-300 hover:text-red-400 transition-colors">
                  Carteles
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-gray-300 hover:text-red-400 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Servicios</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Alquiler de Carteles</li>
              <li>Diseño Publicitario</li>
              <li>Instalación y Mantenimiento</li>
              <li>Consultoría en Marketing</li>
              <li>Reportes de Impacto</li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-red-400" />
                <span className="text-gray-300">+54 387 683-0341</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-red-400" />
                <span className="text-gray-300">ferdycor@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-red-400 mt-1" />
                <span className="text-gray-300">
                  Salta Capital
                  <br />
                  Provincia de Salta, Argentina
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 Carteles Salta. Todos los derechos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-red-400 text-sm transition-colors">
                Política de Privacidad
              </Link>
              <Link href="#" className="text-gray-400 hover:text-red-400 text-sm transition-colors">
                Términos de Servicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
