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
        message: '',
    },
    {
        type: 'input',
        name: 'title',
        message: 'Name project',
    },
    {
        type: 'input',
        name: 'title',
        message: 'Name project',
    },
    {
        type: 'input',
        name: 'title',
        message: 'Name project',
    },
    {
        type: 'input',
        name: 'title',
        message: 'Name project',
    },
    {
        type: 'input',
        name: 'title',
        message: 'Name project',
    },
    {
        type: 'input',
        name: 'title',
        message: 'Name project',
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
