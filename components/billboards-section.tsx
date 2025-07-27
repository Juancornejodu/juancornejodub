"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Eye, Car, Users } from "lucide-react"

export function BillboardsSection() {
  const billboards = [
    {
      id: 1,
      title: "Cartel Premium Centro",
      location: "Av. Entre Ríos y Balcarce",
      zone: "Centro",
      size: "6x3 metros",
      price: "$45,000",
      period: "por mes",
      traffic: "80,000 vehículos/día",
      image: "/placeholder.svg?height=300&width=400",
      available: true,
      features: ["Iluminación LED", "Centro Histórico", "Alto Tráfico"],
      type: "Cartel Iluminado",
    },
    {
      id: 2,
      title: "Mega Cartel Acceso Norte",
      location: "Ruta Nacional 9 Norte",
      zone: "Acceso Norte",
      size: "10x5 metros",
      price: "$65,000",
      period: "por mes",
      traffic: "120,000 vehículos/día",
      image: "/placeholder.svg?height=300&width=400",
      available: true,
      features: ["Tamaño XXL", "Ruta Nacional", "Máximo Impacto"],
      type: "Mega Cartel",
    },
    {
      id: 3,
      title: "Cartel Comercial Belgrano",
      location: "Av. Belgrano y San Martín",
      zone: "Centro Histórico",
      size: "8x4 metros",
      price: "$52,000",
      period: "por mes",
      traffic: "65,000 vehículos/día",
      image: "/placeholder.svg?height=300&width=400",
      available: false,
      features: ["Zona Comercial", "Centro Histórico", "Alta Visibilidad"],
      type: "Cartel Premium",
    },
    {
      id: 4,
      title: "Cartel Barrio Norte",
      location: "Av. Tavella y Mendoza",
      zone: "Barrio Norte",
      size: "6x3 metros",
      price: "$38,000",
      period: "por mes",
      traffic: "45,000 vehículos/día",
      image: "/placeholder.svg?height=300&width=400",
      available: true,
      features: ["Zona Residencial", "Público Familiar", "Económico"],
      type: "Cartel Estándar",
    },
    {
      id: 5,
      title: "Cartel Universitario",
      location: "Av. Virrey Toledo",
      zone: "Zona Universitaria",
      size: "6x3 metros",
      price: "$35,000",
      period: "por mes",
      traffic: "30,000 personas/día",
      image: "/placeholder.svg?height=300&width=400",
      available: true,
      features: ["Público Joven", "Universidad", "Estudiantes"],
      type: "Cartel Universitario",
    },
    {
      id: 6,
      title: "Cartel Acceso Sur",
      location: "Ruta Provincial 1 Sur",
      zone: "Acceso Sur",
      size: "8x4 metros",
      price: "$58,000",
      period: "por mes",
      traffic: "95,000 vehículos/día",
      image: "/placeholder.svg?height=300&width=400",
      available: false,
      features: ["Ruta Provincial", "Alto Tráfico", "Doble Cara"],
      type: "Cartel de Ruta",
    },
  ]

  const scrollToContact = () => {
    const element = document.getElementById("contacto")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const getZoneIcon = (zone: string) => {
    switch (zone) {
      case "Centro":
      case "Centro Histórico":
        return <Users className="h-4 w-4" />
      case "Acceso Norte":
      case "Acceso Sur":
        return <Car className="h-4 w-4" />
      default:
        return <MapPin className="h-4 w-4" />
    }
  }

  return (
    <section id="carteles" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Carteles Disponibles en Salta</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explora nuestra selección de carteles publicitarios en las mejores ubicaciones de Salta Capital
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {billboards.map((billboard) => (
            <Card key={billboard.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={billboard.image || "/placeholder.svg"}
                  alt={billboard.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge
                    variant={billboard.available ? "default" : "secondary"}
                    className={billboard.available ? "bg-red-600" : ""}
                  >
                    {billboard.available ? "Disponible" : "Ocupado"}
                  </Badge>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge variant="outline" className="bg-white/90">
                    {billboard.type}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{billboard.title}</CardTitle>
                <div className="flex items-center text-gray-600">
                  {getZoneIcon(billboard.zone)}
                  <span className="text-sm ml-1">{billboard.location}</span>
                </div>
                <div className="text-sm text-red-600 font-medium">{billboard.zone}</div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Tamaño:</span>
                    <div className="font-medium">{billboard.size}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Tráfico:</span>
                    <div className="font-medium text-green-600">{billboard.traffic}</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {billboard.features.map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-2xl font-bold text-red-600">{billboard.price}</div>
                      <div className="text-sm text-gray-500">{billboard.period}</div>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Eye className="h-4 w-4 mr-1" />
                      <span className="text-xs">Alta visibilidad</span>
                    </div>
                  </div>

                  <Button
                    className="w-full bg-red-600 hover:bg-red-700"
                    disabled={!billboard.available}
                    onClick={scrollToContact}
                  >
                    {billboard.available ? "Consultar Disponibilidad" : "No Disponible"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Resumen por zonas */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Cobertura en Salta</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-8 w-8 text-red-600" />
              </div>
              <h4 className="font-semibold text-gray-900">Centro Histórico</h4>
              <p className="text-sm text-gray-600">Mayor circulación peatonal</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Car className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900">Accesos Principales</h4>
              <p className="text-sm text-gray-600">Alto tráfico vehicular</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900">Zonas Comerciales</h4>
              <p className="text-sm text-gray-600">Público consumidor</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900">Zona Universitaria</h4>
              <p className="text-sm text-gray-600">Público joven</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
