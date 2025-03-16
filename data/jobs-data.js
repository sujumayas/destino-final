// This file contains the job details for the application
const jobsData = {
    "Contador(a)": {
        title: "Contador(a)",
        description: "Profesional encargado de llevar la contabilidad de empresas y personas, registrando transacciones financieras, preparando estados financieros, declaraciones de impuestos y brindando asesoría en gestión económica.",
        riskPercentage: 72,
        motivationalPhrase: "Aunque la automatización reemplazará tareas rutinarias, tu expertise en interpretación de datos y asesoría estratégica será aún más valiosa.",
        similarJobs: [
            {
                title: "Auditor(a)",
                riskLevel: 65,
                riskColor: "#f39c12",
                riskText: "Riesgo Medio-Alto"
            },
            {
                title: "Asistente administrativo(a)",
                riskLevel: 85,
                riskColor: "#e74c3c",
                riskText: "Riesgo Alto"
            },
            {
                title: "Consultor(a) financiero(a)",
                riskLevel: 60,
                riskColor: "#f39c12",
                riskText: "Riesgo Medio"
            },
            {
                title: "Economista",
                riskLevel: 50,
                riskColor: "#f1c40f",
                riskText: "Riesgo Medio"
            }
        ],
        triviaData: [
            "El 89% de las tareas de contabilidad transaccional pueden ser automatizadas con la tecnología actual.",
            "Se estima que para 2030, la profesión contable se enfocará más en la asesoría estratégica que en el registro de datos.",
            "Las herramientas de IA ya pueden detectar anomalías en registros contables con mayor precisión que los humanos.",
            "Los contadores que se especialicen en análisis de datos y asesoría fiscal tendrán mayor demanda en el futuro.",
            "La mayoría de las declaraciones de impuestos sencillas ya son procesadas por software sin intervención humana."
        ],
        otherJobsInterest: [
            "Desarrollador(a) de software",
            "Analista de datos",
            "Gerente",
            "Consultor(a)",
            "Economista"
        ]
    }
};

// For simplicity, we'll just create a simple search function
function searchJobs(query, jobsList) {
    query = query.toLowerCase();
    return jobsList.filter(job => job.toLowerCase().includes(query));
}
