// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'None') {
    return 
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'None') {
    return 
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'None') {
    return 
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  console.log(answers);
  return `# ${answers.title}

  ## Description 
  
  ${answers.description}
  
  
  ## Table of Contents
 
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)

  ## Installation
  
  ${answers.installation}
  
  
  ## Usage 

  ${answers.usage}

  ## Credits
  
  ${answers.credits}
  
  ## License
  
  
  ## Badges


  ## Features
  
  If your project has a lot of features, consider adding a heading called "Features" and listing them there.
  
  
  ### Created by: ${answers.name} 
  ### Github: ${answers.github}
  ### Email: ${answers.email}
  `
};

module.exports = generateMarkdown;
