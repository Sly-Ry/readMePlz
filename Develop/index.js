// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Explain how to use your project:',
    },
    {
        type: "input",
        name: "usage",
        message: 'Provide instructions and examples for use:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to use?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: "input",
        name: "credits",
        message: `Please add your credits.`,
    },
]



// TODO: Create a function to write README file
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./README.md', fileContent, err => {
            // If an error exists, reject the Promise and send the rror to the Promise's '.catch(), method
              if (err) {
              reject(err);
              // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
              return;
            }
        
            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// function writeToFile(fileName, data) {
//     return fs.writeFileSync(path.join(process.cwd(), fileName), data);
// }

// TODO: Create a function to initialize app
function init() {
    fileName()
    .then(addDescription)
    .then(addContentsTable)
    .then(generateMarkdown)
    .then(writeToFile);
};


// Function call to initialize app
init();
