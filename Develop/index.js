// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

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
            message: 'Would you like to include a "Desciption" section?',
            default: true
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
            type: 'confirm',
            name: 'confirmLicense',
            message: 'Would you like to add a license to your README.md?',
            default: true
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
        }
    ])
};
// TODO: Create a function to write README file


const writeToFile = (fileName, data) => {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
questions();