const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "what is the name of your readme"
        }
    ])
}

function writeToFile(fileName, data) {
}

function init() {

}

init();
