// Función para procesar las ubicaciones del CSV
async function processLocations() {
  try {
    // Leer el archivo CSV
    const response = await fetch("/data/ubicaciones-carteles.csv")
    const csvText = await response.text()

    console.log("Contenido del CSV:")
    console.log(csvText)

    // Procesar las líneas del CSV
    const lines = csvText.split("\n").filter((line) => line.trim())
    const headers = lines[0].split(",").map((h) => h.trim())

    console.log("Headers encontrados:", headers)

    const locations = []
    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(",").map((v) => v.trim())
      if (values.length >= headers.length) {
        const location = {}
        headers.forEach((header, index) => {
          location[header] = values[index]
        })
        locations.push(location)
      }
    }

    console.log("Ubicaciones procesadas:", locations)
    return locations
  } catch (error) {
    console.error("Error procesando ubicaciones:", error)
    return []
  }
}

// Ejecutar el procesamiento
processLocations()
