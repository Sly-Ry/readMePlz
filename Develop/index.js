// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter README.md title/Project title: (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log('Please enter your README.md title/Project Title');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmDescription',
            message: 'Would you like to enter some information about your project for a "Description" section?',
            default: true
          },
          {
            type: 'input',
            name: 'description',
            message: 'Describe your project:',
            when: ({ confirmDescription }) => {
                if (confirmDescription) {
                    return true;
                }
                else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmContentsTable',
            message: 'Would you like to include a "Table of Contents" section?',
            default: true
        },
        {
            type: 'confirm',
            name: 'confirmInstallation',
            message: 'Would you like to include an "Installation" section?',
            default: true
        },
        {
            type: 'confirm',
            name: 'confirmUsage',
            message: 'Would you like to include a "Usage" section?',
            default: true
        },
        {
            type: 'list',
            name: 'license',
            message: 'What kind of license should your project have? (Required)',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
        },
        {
            type: 'confirm',
            name: 'confirmContributing',
            message: 'Would you like to include a "Contributing" section?',
            default: true
        },
        {
            type: 'confirm',
            name: 'confirmTesting',
            message: 'Would you like to include a "Tests" section?',
            default: true
        },
        {
            type: 'confirm',
            name: 'confirmQuestions',
            message: 'Would you like to include a "Questions" section?',
            default: true
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your README.md: (Required)',
            validate: gitLinkInput => {
              if (gitLinkInput) {
                return true;
              }
              else {
                console.log('Please enter a Github link.');
                return false;
              }
            }
          },
    ])
};

const mockData = {
    name: 'project',
    confirmDescription: true,
    decription: 
        'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et.',
    confirmContentsTable: true,
    confirmInstallation: true,
    confirmUsage: true,
    confirmLicense: true,
    confirmContributing: true,
    confirmTesting: true,
    confirmQuestions: true,
    link: 'projectHub',

};

// TODO: Create a function to write README file
const writeToFile = (fileName, github, data) => {
    return `
        Name: ${fileName}
        Github: ${github}
    `;
}

fs.writeFileSync('README.md', writeToFile(), err => {
    if (err) throw err;

    console.log('README file complete! Check out README.md to see the output!');
});

// TODO: Create a function to initialize app
function init() {
    questions()
    
};

// Function call to initialize app
init();
