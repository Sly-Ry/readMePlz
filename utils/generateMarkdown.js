function generateMarkdown(responses, info) {
  // generate table of contents conditionally
  let ToC = `## Table of Contents`;

  if (responses.installation !== ''){ ToC += `
  * [Installation](#installation)` };

  if (responses.usage !== ''){ ToC += `
  * [Usage](#usage)`
  };

  if (responses.contributing !== ''){ ToC += `
  * [Contributing](#contributing)`
  };

  if (responses.tests !== ''){ ToC += `
  * [Tests](#tests)`
  };

  // Generate markdown for beginning of README
  let draftMD = 
  `# ${responses.title}

  ![Language](http://img.shields.io/github/languages/top/${responses.username}/${responses.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${responses.username}/${responses.repo}?style=flat&logo=appveyor)


  ## Description 
  
  ${responses.description}
  
  `

  // Insert Table of Contents
  draftMD += ToC;

  // Insert License section 
  draftMD += `
  * [License](#license)`;

  // Insert Installation section
  if (responses.installation !== ''){ 
    draftMD += `
  ## Installation

  *Set up intructions:*

  ${responses.installation}`
  };

  // Insert Usage section
  if (responses.usage !== ''){ 
    draftMD += `
  ## Usage 

  *Examples for use:*
  
  ${responses.usage}`
  }
  
  // Insert Contributing section
  if (responses.contributing !== ''){ 
    draftMD += `

  ## Contributing
  
  *If you would like to contribute to this application, follow these guidelines for how to do so.*

  ${responses.contributing}`
  };
  
  // Insert Test section
  if (responses.tests !== ''){
  draftMD += `

  ## Tests
  
  *Tests for application.*
  
  ${responses.tests}`
  };
  
  // Insert License section
  draftMD += `

  ## License

  ${responses.license} License
  `;

  // Questions / About section
  let about = 
  `
  ---
  
  ## Comments
  
  <img src="${info.avatar_url}" alt="${info.login}" width="30%" />
  
  For any questions and/or suggestions, please contact me:
 
  GitHub: [@${info.login}](${info.html_url})
  `;
  
  // Insert Email
  if (responses.email !== ''){ about += `
    
  Email: ${responses.email}`
  };

  // Insert LinkedIn account
  if (responses.linkedIn !== ''){ about += `
    
  LinkedIn: ${responses.linkedIn}`
  };

  // Insert Dev info section
  draftMD += about;

  // Return Markdown
  return draftMD;
};

module.exports = generateMarkdown;
