"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation, Phone } from "lucide-react"

// Coordenadas aproximadas de las ubicaciones en Salta
const locations = [
  {
    id: 1,
    name: "Av. Entre Ríos y Balcarce",
    address: "Av. Entre Ríos esq. Balcarce",
    lat: -24.7859,
    lng: -65.4117,
    zone: "Centro",
    price: "$45,000",
    available: true,
    traffic: "Muy Alto",
    size: "6x3m",
    type: "Cartel Iluminado",
  },
  {
    id: 2,
    name: "Av. Belgrano y San Martín",
    address: "Av. Belgrano esq. San Martín",
    lat: -24.7889,
    lng: -65.4103,
    zone: "Centro Histórico",
    price: "$52,000",
    available: false,
    traffic: "Alto",
    size: "8x4m",
    type: "Cartel Premium",
  },
  {
    id: 3,
    name: "Ruta Nacional 9 Norte",
    address: "RN9 Km 1640 - Acceso Norte",
    lat: -24.765,
    lng: -65.42,
    zone: "Acceso Norte",
    price: "$65,000",
    available: true,
    traffic: "Muy Alto",
    size: "10x5m",
    type: "Mega Cartel",
  },
  {
    id: 4,
    name: "Av. Tavella y Mendoza",
    address: "Av. Tavella esq. Mendoza",
    lat: -24.78,
    lng: -65.405,
    zone: "Barrio Norte",
    price: "$38,000",
    available: true,
    traffic: "Alto",
    size: "6x3m",
    type: "Cartel Estándar",
  },
  {
    id: 5,
    name: "Av. Paraguay y Córdoba",
    address: "Av. Paraguay esq. Córdoba",
    lat: -24.787,
    lng: -65.409,
    zone: "Centro",
    price: "$42,000",
    available: true,
    traffic: "Alto",
    size: "6x3m",
    type: "Cartel Iluminado",
  },
  {
    id: 6,
    name: "Ruta Provincial 1 Sur",
    address: "RP1 - Acceso Sur",
    lat: -24.81,
    lng: -65.415,
    zone: "Acceso Sur",
    price: "$58,000",
    available: false,
    traffic: "Muy Alto",
    size: "8x4m",
    type: "Cartel de Ruta",
  },
  {
    id: 7,
    name: "Av. Sarmiento y Mitre",
    address: "Av. Sarmiento esq. Mitre",
    lat: -24.788,
    lng: -65.411,
    zone: "Centro",
    price: "$40,000",
    available: true,
    traffic: "Alto",
    size: "6x3m",
    type: "Cartel Comercial",
  },
  {
    id: 8,
    name: "Av. Virrey Toledo",
    address: "Av. Virrey Toledo 2500",
    lat: -24.775,
    lng: -65.425,
    zone: "Zona Universitaria",
    price: "$35,000",
    available: true,
    traffic: "Alto",
    size: "6x3m",
    type: "Cartel Universitario",
  },
]

export function InteractiveMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [selectedLocation, setSelectedLocation] = useState<(typeof locations)[0] | null>(null)
  const [mapLoaded, setMapLoaded] = useState(false)

  useEffect(() => {
    // Simular carga del mapa (en producción usarías Google Maps API)
    const timer = setTimeout(() => {
      setMapLoaded(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleLocationClick = (location: (typeof locations)[0]) => {
    setSelectedLocation(location)
  }

  const scrollToContact = () => {
    const element = document.getElementById("contacto")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {/* Mapa interactivo */}
      <div className="lg:col-span-2">
        <Card className="h-[600px] overflow-hidden">
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-red-600" />
              Mapa Interactivo de Salta
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 h-full">
            <div ref={mapRef} className="relative w-full h-full bg-gradient-to-br from-green-100 to-blue-100">
              {/* Simulación del mapa de Salta */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-200 via-yellow-100 to-blue-200">
                {/* Representación visual de Salta */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-300 rounded-full opacity-30"></div>

                {/* Marcadores de ubicaciones */}
                {locations.map((location) => {
                  // Convertir coordenadas a posición en el mapa visual
                  const x = ((location.lng + 65.42) * 2000) % 100
                  const y = ((location.lat + 24.8) * 2000) % 100

                  return (
                    <div
                      key={location.id}
                      className={`absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-110 ${
                        selectedLocation?.id === location.id ? "scale-125 z-10" : ""
                      }`}
                      style={{
                        left: `${20 + x * 0.6}%`,
                        top: `${20 + y * 0.6}%`,
                      }}
                      onClick={() => handleLocationClick(location)}
                    >
                      <div
                        className={`w-6 h-6 rounded-full border-2 border-white shadow-lg flex items-center justify-center ${
                          location.available ? "bg-red-600" : "bg-gray-400"
                        }`}
                      >
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-lg text-xs whitespace-nowrap">
                        {location.name.split(" ")[0]} {location.name.split(" ")[1]}
                      </div>
                    </div>
                  )
                })}

                {/* Etiquetas de zonas */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                  <h4 className="font-semibold text-sm mb-2">Zonas de Salta</h4>
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-red-600 rounded-full mr-2"></div>
                      <span>Disponible</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-gray-400 rounded-full mr-2"></div>
                      <span>Ocupado</span>
                    </div>
                  </div>
                </div>

                {/* Indicador de carga */}
                {!mapLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white/80">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
                      <p className="text-gray-600">Cargando mapa de Salta...</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Panel de información */}
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">
              {selectedLocation ? selectedLocation.name : "Selecciona una ubicación"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {selectedLocation ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge
                    variant={selectedLocation.available ? "default" : "secondary"}
                    className={selectedLocation.available ? "bg-red-600" : ""}
                  >
                    {selectedLocation.available ? "Disponible" : "Ocupado"}
                  </Badge>
                  <span className="font-bold text-red-600">{selectedLocation.price}/mes</span>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                    <span>{selectedLocation.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Navigation className="h-4 w-4 mr-2 text-gray-500" />
                    <span>{selectedLocation.zone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Tamaño:</span>
                    <span className="font-medium">{selectedLocation.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Tráfico:</span>
                    <span className="font-medium text-green-600">{selectedLocation.traffic}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Tipo:</span>
                    <span className="font-medium">{selectedLocation.type}</span>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <Button
                    className="w-full bg-red-600 hover:bg-red-700"
                    disabled={!selectedLocation.available}
                    onClick={scrollToContact}
                  >
                    {selectedLocation.available ? "Consultar" : "No Disponible"}
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-500 py-8">
                <MapPin className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p>Haz clic en cualquier marcador del mapa para ver los detalles de esa ubicación.</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Información de contacto rápido */}
        <Card className="bg-red-50 border-red-200">
          <CardContent className="p-4">
            <div className="text-center">
              <Phone className="h-8 w-8 text-red-600 mx-auto mb-2" />
              <p className="text-sm text-red-800 mb-3">¿Necesitas más información?</p>
              <Button size="sm" className="bg-red-600 hover:bg-red-700">
                Llamar: +54 387 683-0341
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Estadísticas rápidas */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Resumen</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-red-600">{locations.filter((l) => l.available).length}</div>
                <div className="text-xs text-gray-600">Disponibles</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-400">{locations.filter((l) => !l.available).length}</div>
                <div className="text-xs text-gray-600">Ocupados</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
