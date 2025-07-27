import { Award, Users, Target, TrendingUp } from "lucide-react"

export function AboutSection() {
  return (
    <section id="sobre-nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestra Experiencia</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos una empresa con 25 años de experiencia en Salta, especializada en alquiler de carteles publicitarios
            en vía pública. Contamos con más de 300 carteles estratégicamente ubicados en toda la provincia, ofreciendo
            las mejores ubicaciones para maximizar el impacto de tu marca y conectar con tu audiencia objetivo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Calidad Premium</h3>
            <p className="text-gray-600">Carteles de alta calidad con materiales resistentes y diseños impactantes.</p>
          </div>

          <div className="text-center p-6 rounded-lg bg-green-50 hover:bg-green-100 transition-colors">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Ubicaciones Estratégicas</h3>
            <p className="text-gray-600">Puntos de alta circulación vehicular y peatonal para máxima exposición.</p>
          </div>

          <div className="text-center p-6 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Atención Personalizada</h3>
            <p className="text-gray-600">
              Equipo especializado que te acompaña en cada paso de tu campaña publicitaria.
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-orange-50 hover:bg-orange-100 transition-colors">
            <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Resultados Medibles</h3>
            <p className="text-gray-600">
              Reportes detallados de impresiones y alcance para medir el éxito de tu campaña.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">¿Por qué elegir Carteles Salta?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    <strong>Experiencia comprobada:</strong> Más de 25 años ayudando a empresas salteñas a crecer.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    <strong>Red extensa:</strong> Más de 300 carteles en ubicaciones premium en toda Salta.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    <strong>Flexibilidad:</strong> Planes adaptados a tu presupuesto y objetivos.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    <strong>Soporte completo:</strong> Desde el diseño hasta la instalación.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Equipo profesional trabajando"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
