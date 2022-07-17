// packages
const fs = require('fs');
const inquirer = require('inquirer');
// const util = require('util');

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
const writeToFile = (fileType, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileType, data, err => {
            // Checks for error.
            if (err) {
                reject(err);
                // 'Return' to make sure the Promise doesn't execute resolve().
                return console.log(err);
            }
            // If none, resolve the Promise.
            resolve({
                ok: true,
                message: 'README.md file successfully generated.'
            });
        });
    });
};

// // A function to write README file
// const writeToFile = (fileType, data) => {
//     fs.writeFile(fileType, data, err => {
//         // Checks for error.
//         if (err) {
//             return console.log(err);
//         }

//         // If none, resolve the Promise.
//         console.log('README.md file successfully generated.');
//     });
// };

// const writeFileAsync = util.promisify(writeToFile);

// // A function to initialize app
// function init() {
//     inquirer
//     // Prompt the user with questions.
//     .prompt(questions)
//     // Then take data and create the ReadMe file using the writeToFile function
//     .then(function (data) {
//         writeToFile('README.md', generateMarkdown(data));
//     });
// };

async function init() {
    try {
        // prompt Inquirer questions
        const userResponses = await inquirer.prompt(questions);
        console.log('Your responses: ', userResponses);
        console.log('Thank you! Fetching your GitHub data next...');

        // call GitHub api for user info
        const userInfo = await api.getUser(userResponses);
        console.log('Your GitHub user info: ', userInfo);

        // pass responses and info to generateMarkdown
        console.log('Generating your README next...');
        const markdown = generateMarkdown(userResponses, userInfo);
        console.log(markdown);

        // markdown to file
        await writeToFile('ExampleFile', markdown);
    } catch (err) {
        console.log(err);
    }
};

// Function call to initialize app
init();
