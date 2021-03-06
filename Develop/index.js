const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generatemd = require("./utils/generateMarkdown.js")

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of your project?"
        },
        {
            type: "input",
            name: "description",
            message: "Describe the project"
        },
        {
            type: "input",
            name: "installation",
            message: "How do you install the project?"
        },
        {
            type: "input",
            name: "usage",
            message: "What's the intended use of the project?"
        },
        {
            type: "list",
            name: "license",
            message: "License: ",
            choices: [
                "MIT",
                "Apache",
                "GPL v3",
                "BSD 3-clause",
                "Other",
            ]
        },
        {
            type: "input",
            name: "author",
            message: "Who are the author(s) of the project?"
        }
    ])
    .then(answers => {
        fs.writeFile("README.md", generatemd(answers), (err) => {
            if (err) throw err;
            console.log("README generated!")
        })
    })
}

function writeToFile(fileName, data) {
    
}

function init() {

}



promptUser();

init();
