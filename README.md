# Destino Laboral

Aplicación que muestra el impacto de la IA en diferentes profesiones.

## Estructura Modular para Datos de Trabajos

Esta aplicación utiliza un enfoque modular para manejar los datos de trabajos:

### Directorios y Archivos Clave

- `jobs-source/`: Contiene archivos JSON individuales para cada profesión
- `data/jobs-data.js`: Archivo generado automáticamente que combina todos los trabajos
- `build-jobs.js`: Script que procesa los archivos JSON y genera el archivo combinado
- `package.json`: Define los scripts y dependencias del proyecto
- `netlify.toml`: Configuración para el despliegue en Netlify

### Cómo Agregar Nuevos Trabajos

Para agregar un nuevo trabajo, simplemente crea un archivo JSON en el directorio `jobs-source/` siguiendo esta estructura:

```json
{
  "key": "Nombre del Trabajo",
  "title": "Nombre del Trabajo",
  "description": "Descripción detallada del trabajo...",
  "riskPercentage": 50,
  "motivationalPhrase": "Frase motivacional...",
  "similarJobs": [
    {
      "title": "Trabajo Similar 1",
      "riskLevel": 45,
      "riskColor": "#color-code",
      "riskText": "Texto de Riesgo"
    },
    ...
  ],
  "triviaData": [
    "Dato interesante 1",
    "Dato interesante 2",
    ...
  ],
  "otherJobsInterest": [
    "Otro trabajo 1",
    "Otro trabajo 2",
    ...
  ]
}
```

### Proceso de Construcción

Cuando se realiza un despliegue, Netlify ejecutará automáticamente:

```
npm run build
```

Esto ejecutará el script `build-jobs.js` que combinará todos los archivos JSON en `jobs-source/` y generará el archivo `data/jobs-data.js` que utiliza la aplicación.

### Para Desarrolladores Externos

Si eres un colaborador externo, simplemente proporciona archivos JSON individuales con la estructura correcta. No es necesario editar manualmente el archivo `jobs-data.js`.
