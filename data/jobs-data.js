// Auto-generated from individual job files in jobs-source directory
// Last updated: 2025-03-16T15:53:00.195Z
const jobsData = {
  "Contador(a)": {
    "title": "Contador(a)",
    "description": "Profesional encargado de llevar la contabilidad de empresas y personas, registrando transacciones financieras, preparando estados financieros, declaraciones de impuestos y brindando asesoría en gestión económica.",
    "riskPercentage": 72,
    "motivationalPhrase": "Aunque la automatización reemplazará tareas rutinarias, tu expertise en interpretación de datos y asesoría estratégica será aún más valiosa.",
    "similarJobs": [
      {
        "title": "Auditor(a)",
        "riskLevel": 65,
        "riskColor": "#f39c12",
        "riskText": "Riesgo Medio-Alto"
      },
      {
        "title": "Asistente administrativo(a)",
        "riskLevel": 85,
        "riskColor": "#e74c3c",
        "riskText": "Riesgo Alto"
      },
      {
        "title": "Consultor(a) financiero(a)",
        "riskLevel": 60,
        "riskColor": "#f39c12",
        "riskText": "Riesgo Medio"
      },
      {
        "title": "Economista",
        "riskLevel": 50,
        "riskColor": "#f1c40f",
        "riskText": "Riesgo Medio"
      }
    ],
    "triviaData": [
      "El 89% de las tareas de contabilidad transaccional pueden ser automatizadas con la tecnología actual.",
      "Se estima que para 2030, la profesión contable se enfocará más en la asesoría estratégica que en el registro de datos.",
      "Las herramientas de IA ya pueden detectar anomalías en registros contables con mayor precisión que los humanos.",
      "Los contadores que se especialicen en análisis de datos y asesoría fiscal tendrán mayor demanda en el futuro.",
      "La mayoría de las declaraciones de impuestos sencillas ya son procesadas por software sin intervención humana."
    ],
    "otherJobsInterest": [
      "Desarrollador(a) de software",
      "Analista de datos",
      "Gerente",
      "Consultor(a)",
      "Economista"
    ]
  },
  "Desarrollador(a) de software": {
    "title": "Desarrollador(a) de software",
    "description": "Profesional encargado de diseñar, programar y probar aplicaciones y sistemas informáticos, investigando y aplicando las últimas tecnologías para resolver problemas específicos.",
    "riskPercentage": 35,
    "motivationalPhrase": "Tu capacidad para innovar y crear nueva tecnología te mantiene a la vanguardia de la revolución digital. La IA te convierte en un profesional más eficiente.",
    "similarJobs": [
      {
        "title": "Ingeniero(a) de sistemas",
        "riskLevel": 40,
        "riskColor": "#f1c40f",
        "riskText": "Riesgo Medio-Bajo"
      },
      {
        "title": "Analista de datos",
        "riskLevel": 25,
        "riskColor": "#2ecc71",
        "riskText": "Riesgo Bajo"
      },
      {
        "title": "Programador(a)",
        "riskLevel": 45,
        "riskColor": "#f1c40f",
        "riskText": "Riesgo Medio"
      },
      {
        "title": "Diseñador(a) UX/UI",
        "riskLevel": 30,
        "riskColor": "#2ecc71",
        "riskText": "Riesgo Bajo"
      }
    ],
    "triviaData": [
      "Se estima que para 2030, la demanda de desarrolladores de software crecerá un 22%, mucho más rápido que el promedio de otras ocupaciones.",
      "La IA está creando nuevas especialidades dentro del desarrollo de software, especialmente en aprendizaje automático e IA ética.",
      "Los desarrolladores que pueden resolver problemas complejos y tienen habilidades de colaboración seguirán siendo muy valorados incluso con la automatización.",
      "La herramienta GitHub Copilot, basada en IA, ya asiste a desarrolladores completando código, pero no reemplaza el razonamiento humano.",
      "Más del 75% de las empresas consideran que la escasez de desarrolladores de software calificados es una barrera para la innovación."
    ],
    "otherJobsInterest": [
      "Ingeniero(a) de datos",
      "Arquitecto(a) de software",
      "DevOps Engineer",
      "Especialista en ciberseguridad",
      "Consultor(a) tecnológico(a)"
    ]
  }
};

// For simplicity, we'll just create a simple search function
function searchJobs(query, jobsList) {
  query = query.toLowerCase();
  return jobsList.filter(job => job.toLowerCase().includes(query));
}
