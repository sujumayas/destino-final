const fs = require('fs');
const path = require('path');
const glob = require('glob');

console.log('Starting job data build process...');

// Find all job JSON files
const jobFiles = glob.sync('jobs-source/**/*.json');
console.log(`Found ${jobFiles.length} job files to process`);

// Create a data object to hold all jobs
let jobsDataObject = {};

// Process each job file
jobFiles.forEach(file => {
  try {
    const jobData = fs.readFileSync(file, 'utf8');
    const job = JSON.parse(jobData);
    
    // Use the "key" field as the index in our object
    // This maintains the current structure your app expects
    const jobKey = job.key;
    
    if (jobKey) {
      // Remove the key from the job object since we use it as the property name
      const { key, ...jobWithoutKey } = job;
      
      // Add to our jobs object
      jobsDataObject[jobKey] = jobWithoutKey;
      console.log(`Processed: ${file} (${jobKey})`);
    } else {
      console.error(`Error in ${file}: Missing required "key" field`);
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error);
  }
});

// Create the data directory if it doesn't exist
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Generate the JavaScript file
const outputFile = path.join(dataDir, 'jobs-data.js');
const jsContent = `// Auto-generated from individual job files in jobs-source directory
// Last updated: ${new Date().toISOString()}
const jobsData = ${JSON.stringify(jobsDataObject, null, 2)};

// For simplicity, we'll just create a simple search function
function searchJobs(query, jobsList) {
  query = query.toLowerCase();
  return jobsList.filter(job => job.toLowerCase().includes(query));
}
`;

// Write to the output file
fs.writeFileSync(outputFile, jsContent);
console.log(`Successfully generated jobs-data.js with ${Object.keys(jobsDataObject).length} jobs`);
