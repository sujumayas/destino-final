# Instrucciones para Destino Laboral - Sistema Modular

Este documento explica cómo utilizar la nueva estructura modular para administrar los datos de trabajos en la aplicación Destino Laboral.

## Configuración Inicial

1. Asegúrate de tener Node.js instalado en tu sistema

2. Desde la terminal, en la carpeta del proyecto, ejecuta:
   ```
   npm install
   ```

   Esto instalará las dependencias necesarias (principalmente el paquete `glob`).

## Estructura de Archivos

La aplicación ahora tiene la siguiente estructura para manejar los datos de trabajos:

- `jobs-source/`: Directorio donde se almacenan los archivos JSON individuales de cada trabajo
- `data/jobs-data.js`: Archivo generado automáticamente (NO editar manualmente)
- `build-jobs.js`: Script que combina todos los archivos JSON en un único archivo de datos
- `package.json`: Define las dependencias y scripts de construcción
- `netlify.toml`: Configuración para Netlify

## Cómo Agregar Nuevos Trabajos

Para agregar un nuevo trabajo a la aplicación:

1. Crea un nuevo archivo JSON en la carpeta `jobs-source/`
   - Puedes nombrar el archivo como quieras, pero utiliza nombres descriptivos (ej: `desarrollador-software.json`)

2. El archivo debe seguir esta estructura:
   ```