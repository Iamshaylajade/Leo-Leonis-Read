// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer =('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Name project',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Reason and function of project',
    },
    {
        type: 'input',
        name: 'screenshot',
        message: 'provide path of image for screenshot',
    },
    {
        type: 'input',
        name: 'link',
        message: 'Enter URL of deployed application',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Enter license applied for this project',
    },
    {
        type: 'input',
        name: 'require',
        message: 'Enter project dependencies here',
    },
    {
        type: 'input',
        name: 'features',
        message: 'What are some features of this application',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter languages/technologies with ths project.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter email address',
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'List contributors',
    },
    {
        type: 'input',
        name: 'test',
        message: 'provide information if applicable',
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log('Professional README.md File...');
        writeToFile('./Leo-Leonis/README.md',generateMarkdown({...responses}));
    });
}

// Function call to initialize app
init();
