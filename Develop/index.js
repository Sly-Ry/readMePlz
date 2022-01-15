// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        name: 'name',
        message: "What's your name? (Required)",
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project: (Required)',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide a step-by-step description of how to run your project:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to use?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please add your credits: (if any)',
    },
    {
        type: 'input',
        name: 'github',
        message: "What's your GitHub User Name? (Required)",
    },
    {
        type: 'input',
        name: 'email',
        message: "What's your email address?",
    }
];

// TODO: Create a function to write README file
const writeToFile = (readMeFile, answers) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(readMeFile, answers, err => {
            // Checks for error.
              if (err) {
              reject(err);
              // 'Return' to make sure the Promise doesn't execute resolve().
              return;
            }
            // If none, resolve the Promise.
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer
    // Prompt the user with questions.
    .prompt(questions)
    // Then take answers and create the ReadMe file using the writeToFile function
    .then(function (answers) {
        writeToFile('README.md', generateMarkdown(answers));
    });
};


// Function call to initialize app
init();
