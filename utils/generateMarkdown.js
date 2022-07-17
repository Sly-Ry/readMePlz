function generateMarkdown(responses, info) {
  // generate table of contents conditionally
  let ToC = `## Table of Contents`;

  if (responses.installation !== ''){
    ToC += `* [Installation](#installation)`
  };

  if (responses.usage !== ''){
    ToC += `* [Usage](#usage)`
  };

  if (responses.contributing !== ''){
    ToC += `* [Contributing](#contributing)`
  };

  if (responses.tests !== ''){
    ToC += `* [Tests](#tests)`
  };


  return `# ${responses.title}

  ## Description 
  
  ${responses.description}
  
  
  ## Table of Contents
 
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)

  ## Installation
  
  ${responses.installation}
  
  
  ## Usage 

  ${responses.usage}

  ## Credits
  
  ${responses.credits}
  
  ## License
  
  --feature coming soon--

  ## Badges

  --feature coming soon--

  ## Features
  
  --feature coming soon--
  
  
  ### Created by: ${responses.name} 
  ### Github: ${responses.github}
  ### Email: ${responses.email}
  `
};

module.exports = generateMarkdown;
