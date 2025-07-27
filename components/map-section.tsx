"use client"

import { InteractiveMap } from "./interactive-map"

export function MapSection() {
  // Ubicaciones reales de carteles en Salta basadas en el CSV
  const locations = [
    {
      id: 1,
      name: "Av. Entre Ríos y Balcarce",
      address: "Av. Entre Ríos esq. Balcarce",
      zone: "Centro",
      traffic: "Muy Alto",
      size: "6x3 metros",
      available: true,
      price: "$45,000",
      type: "Cartel Iluminado",
    },
    {
      id: 2,
      name: "Av. Belgrano y San Martín",
      address: "Av. Belgrano esq. San Martín",
      zone: "Centro Histórico",
      traffic: "Alto",
      size: "8x4 metros",
      available: false,
      price: "$52,000",
      type: "Cartel Premium",
    },
    {
      id: 3,
      name: "Ruta Nacional 9 Norte",
      address: "RN9 Km 1640 - Acceso Norte",
      zone: "Acceso Norte",
      traffic: "Muy Alto",
      size: "10x5 metros",
      available: true,
      price: "$65,000",
      type: "Mega Cartel",
    },
    {
      id: 4,
      name: "Av. Tavella y Mendoza",
      address: "Av. Tavella esq. Mendoza",
      zone: "Barrio Norte",
      traffic: "Alto",
      size: "6x3 metros",
      available: true,
      price: "$38,000",
      type: "Cartel Estándar",
    },
    {
      id: 5,
      name: "Av. Paraguay y Córdoba",
      address: "Av. Paraguay esq. Córdoba",
      zone: "Centro",
      traffic: "Alto",
      size: "6x3 metros",
      available: true,
      price: "$42,000",
      type: "Cartel Iluminado",
    },
    {
      id: 6,
      name: "Ruta Provincial 1 Sur",
      address: "RP1 - Acceso Sur",
      zone: "Acceso Sur",
      traffic: "Muy Alto",
      size: "8x4 metros",
      available: false,
      price: "$58,000",
      type: "Cartel de Ruta",
    },
    {
      id: 7,
      name: "Av. Sarmiento y Mitre",
      address: "Av. Sarmiento esq. Mitre",
      zone: "Centro",
      traffic: "Alto",
      size: "6x3 metros",
      available: true,
      price: "$40,000",
      type: "Cartel Comercial",
    },
    {
      id: 8,
      name: "Av. Virrey Toledo",
      address: "Av. Virrey Toledo 2500",
      zone: "Zona Universitaria",
      traffic: "Alto",
      size: "6x3 metros",
      available: true,
      price: "$35,000",
      type: "Cartel Universitario",
    },
  ]

  const getTrafficColor = (traffic: string) => {
    switch (traffic) {
      case "Muy Alto":
        return "bg-red-100 text-red-800"
      case "Alto":
        return "bg-orange-100 text-orange-800"
      case "Medio":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <section id="ubicaciones" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestras Ubicaciones en Salta</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explora nuestros carteles en un mapa interactivo. Haz clic en cualquier marcador para ver detalles, precios
            y disponibilidad.
          </p>
        </div>

        <InteractiveMap />

        {/* Información adicional */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">8</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Ubicaciones Estratégicas</h3>
              <p className="text-sm text-gray-600">En los puntos de mayor circulación de Salta</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">6</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Carteles Disponibles</h3>
              <p className="text-sm text-gray-600">Listos para tu campaña publicitaria</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Zonas Cubiertas</h3>
              <p className="text-sm text-gray-600">Centro, Accesos, Norte y Universidad</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
