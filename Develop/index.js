// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
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
            // same as featured projects
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
            type: 'input',
            name: 'installation',
            message: 'Explain installation process:',
            when: ({ confirmInstallation }) => {
                if (confirmInstallation) {
                    return true;
                }
                else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmUsage',
            message: 'Would you like to include a "Usage" section?',
            default: true
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions for use:',
            validate: confirmContributing => {
                if (confirmContributing) {
                    return true;
                }
                else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmPhotos',
            message: 'Would you like to include a photo in "Usage" section?',
            default: true
        },
        {
            type: 'input',
            name: 'usage-alt',
            message: 'Describe your screenshot:',
            validate: confirmPhotos => {
                if (confirmPhotos) {
                    return true;
                }
                else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage-pic',
            message: 'Add photo link: [Ex: (assets/images/screenshot.png) ]',
            validate: confirmPhotos => {
                if (confirmPhotos) {
                    return true;
                }
                else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmContributing',
            message: 'Would you like to add "Contributing" guidlines to your README file?',
            default: true
        },
        {
            type: 'input',
            name: 'guidelines',
            message: 'Add guidelines for other developers to follow:',
            validate: confirmContributing => {
                if (confirmContributing) {
                    return true;
                }
                else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmTesting',
            message: 'Would you like to include a "Tests" section?',
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
        }
    ]);

};

// const mockData = {
//     title: 'project',
//     confirmDescription: true,
//     decription: 
//         'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et.',
//     confirmContentsTable: true,
//     confirmInstallation: true,
//     installation: blah blah bruhhh,
//     confirmUsage: true,
//     usage-alt: photo,
//     usage-pic: '',
//     confirmLicense: true,
//     confirmContributing: true,
//     guidelines: "good stuff only" 
//     confirmTesting: true,
//     confirmQuestions: true,
//     link: 'projectHub',

// };

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
    questions()
    .then(generateMarkdown)
    .then(writeToFile);
};


// Function call to initialize app
init();
