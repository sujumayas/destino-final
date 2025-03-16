// Main application JavaScript

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the job list from YAML file and convert to JS array
    const allJobs = typeof empleosList !== 'undefined' ? empleosList : [];
    
    // Elements
    const searchInput = document.getElementById('job-search');
    const searchResults = document.getElementById('search-results');
    const noResults = document.getElementById('no-results');
    const createNew = document.getElementById('create-new');
    
    // Only proceed if we're on the home page with search functionality
    if (searchInput) {
        // Handle input in the search box
        searchInput.addEventListener('input', function() {
            const query = this.value.trim();
            
            // If query is empty, hide results
            if (query === '') {
                searchResults.classList.remove('show');
                return;
            }
            
            // Filter jobs based on query
            const filteredJobs = searchJobs(query, allJobs);
            
            // Clear previous results
            searchResults.innerHTML = '';
            
            // Show/hide no results message
            if (filteredJobs.length === 0) {
                noResults.style.display = 'block';
                createNew.style.display = 'block';
                createNew.textContent = `Crear nuevo trabajo: "${query}"`;
            } else {
                noResults.style.display = 'none';
                createNew.style.display = 'none';
                
                // Add filtered jobs to results
                filteredJobs.forEach(job => {
                    const resultItem = document.createElement('div');
                    resultItem.classList.add('result-item');
                    resultItem.textContent = job;
                    
                    // Handle clicking on a result
                    resultItem.addEventListener('click', function() {
                        window.location.href = `job-detail.html?job=${encodeURIComponent(job)}`;
                    });
                    
                    searchResults.appendChild(resultItem);
                });
            }
            
            // Show results
            searchResults.classList.add('show');
        });
        
        // Handle clicking on "Create New"
        createNew.addEventListener('click', function() {
            const newJob = searchInput.value.trim();
            window.location.href = `job-detail.html?job=${encodeURIComponent(newJob)}&new=true`;
        });
        
        // Hide results when clicking outside
        document.addEventListener('click', function(event) {
            if (!searchInput.contains(event.target) && !searchResults.contains(event.target)) {
                searchResults.classList.remove('show');
            }
        });
        
        // Show results when focusing on input
        searchInput.addEventListener('focus', function() {
            if (this.value.trim() !== '') {
                searchResults.classList.add('show');
            }
        });
    }
    
    // Handle job detail page
    const jobDetailContainer = document.getElementById('job-detail');
    if (jobDetailContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        const jobTitle = urlParams.get('job');
        const isNew = urlParams.get('new') === 'true';
        
        if (jobTitle) {
            // Get job data from our data file
            const jobData = jobsData[jobTitle];
            
            // If job exists in our data
            if (jobData) {
                displayJobDetails(jobData);
            } else if (isNew) {
                // Handle new job that doesn't exist in our data
                displayNewJobPlaceholder(jobTitle);
            } else {
                // Job not found
                jobDetailContainer.innerHTML = '<div class="container"><h1>Trabajo no encontrado</h1><p>El trabajo que buscas no está en nuestra base de datos.</p><a href="index.html" class="job-link">Volver al inicio</a></div>';
            }
        }
    }
});

// Function to display job details
function displayJobDetails(jobData) {
    const jobDetailContainer = document.getElementById('job-detail');
    
    const jobDetailHTML = `
        <div class="container">
            <div class="job-header">
                <h1 class="job-title">${jobData.title}</h1>
                <p class="job-description">${jobData.description}</p>
            </div>
            
            <div class="risk-container">
                <h2 class="risk-label">Nivel de Riesgo de Automatización</h2>
                <div class="risk-meter">
                    <div class="risk-level" style="width: ${jobData.riskPercentage}%;"></div>
                    <span class="risk-percentage">${jobData.riskPercentage}%</span>
                </div>
            </div>
            
            <div class="motivational">
                "${jobData.motivationalPhrase}"
            </div>
            
            <div class="section">
                <h2 class="section-title">Trabajos Similares</h2>
                <div class="similar-jobs">
                    ${jobData.similarJobs.map(job => `
                        <div class="similar-job-card">
                            <h3 class="similar-job-title">${job.title}</h3>
                            <div class="risk-indicator">
                                <div class="risk-dot" style="background-color: ${job.riskColor};"></div>
                                <span class="risk-text">${job.riskText} (${job.riskLevel}%)</span>
                            </div>
                            <a href="job-detail.html?job=${encodeURIComponent(job.title)}" class="job-link">Ver detalles</a>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="section">
                <h2 class="section-title">Datos y Curiosidades</h2>
                <ul class="trivia-list">
                    ${jobData.triviaData.map(trivia => `
                        <li class="trivia-item">${trivia}</li>
                    `).join('')}
                </ul>
            </div>
            
            <div class="section">
                <h2 class="section-title">Otros trabajos que te pueden interesar</h2>
                <div class="other-jobs">
                    ${jobData.otherJobsInterest.map(job => `
                        <a href="job-detail.html?job=${encodeURIComponent(job)}" class="other-job-pill">${job}</a>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    jobDetailContainer.innerHTML = jobDetailHTML;
}

// Function to display placeholder for new jobs
function displayNewJobPlaceholder(jobTitle) {
    const jobDetailContainer = document.getElementById('job-detail');
    
    const placeholderHTML = `
        <div class="container">
            <div class="job-header">
                <h1 class="job-title">${jobTitle}</h1>
                <p class="job-description">Este trabajo aún no está en nuestra base de datos. Estamos recopilando información sobre cómo la IA podría afectar esta profesión.</p>
            </div>
            
            <div class="risk-container">
                <h2 class="risk-label">Nivel de Riesgo de Automatización</h2>
                <div class="risk-meter">
                    <div class="risk-level" style="width: 50%;"></div>
                    <span class="risk-percentage">Calculando...</span>
                </div>
            </div>
            
            <div class="motivational">
                "Estamos analizando el impacto de la IA en esta profesión. Vuelve pronto para más información."
            </div>
            
            <div class="section">
                <h2 class="section-title">Trabajos que te pueden interesar</h2>
                <div class="other-jobs">
                    <a href="job-detail.html?job=Contador(a)" class="other-job-pill">Contador(a)</a>
                    <a href="job-detail.html?job=Desarrollador(a) de software" class="other-job-pill">Desarrollador(a) de software</a>
                    <a href="job-detail.html?job=Profesor(a) de educación primaria" class="other-job-pill">Profesor(a)</a>
                    <a href="job-detail.html?job=Médico(a)" class="other-job-pill">Médico(a)</a>
                    <a href="index.html" class="other-job-pill">Buscar otro trabajo</a>
                </div>
            </div>
        </div>
    `;
    
    jobDetailContainer.innerHTML = placeholderHTML;
}
