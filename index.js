// packages
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

// modules
const api = require('./utils/api');
const generateMarkdown = require('./utils/generateMarkdown.js')

// An array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username:',
        name: 'username',
        default: 'Sly-Ry',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log('A valid GitHub username is required.');
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'What is your GitHub repository title:',
        name: 'repo',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log('A valid GitHub repo is required for a badge.');
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'Provide a short description of your project:',
        name: 'description',
        default: 'Project Description',
        validation: function (answer) {
            if (answer.length < 1) {
                return console.log('A valid project description is required.')
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'If applicable, describe the steps required to install your project for the Installation section:',
        name: 'installation',
        
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use for the Usage section:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'If applicable, provide instructions on how other developers can contribute to you project:',
        name: 'contribute'
    },
    {
        type: 'input',
        message: 'If applicable, provide any tests written for your application and provide examples on how to run them:',
        name: 'tests'
    },
    {
        type: 'list',
        message: 'Which license would you like to use?',
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
];

// A function to write README file
const writeToFile = (fileType, answers) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileType, answers, err => {
            // Checks for error.
              if (err) {
              reject(err);
              // 'Return' to make sure the Promise doesn't execute resolve().
              return;
            }
            // If none, resolve the Promise.
            resolve({
                ok: true,
                message: 'File created.'
            });
        });
    });
};

// A function to initialize app
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
