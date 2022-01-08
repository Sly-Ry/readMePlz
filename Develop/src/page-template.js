// TODO: Create a function to write README file
const writeToFile = (fileName, github, data) => {
    return `
        Name: ${fileName}
        Github: ${github}
    `;
}

module.exports = writeToFile;