// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [];

// inquirer way to do questions:
inquirer
    .createPromptModule([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'Please provide the title of your project here:',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a detailed description of project here:',
        },
        {
            type: 'input',
            name: 'tableOfContents',
            message: 'Please provide a table of contents here:',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide any installation instructions here:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide any usage information here:',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please provide what license was used here:',
            choices: ['MIT', 'Academic Free License v3.0', 'Eclipse Public License 1.0', 'Microsoft Public License'],
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Please provide any contributing guidelines here:',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please provide any tests here:',
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Please provide any questions here:',
        }
    ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();