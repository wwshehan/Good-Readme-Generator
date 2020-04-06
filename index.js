const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const inquirer = require("inquirer");

const questions = [
  {
    type: "input",
    message: "Please enter your GitHub username.",
    name: "username",
  },
  {
    type: "input",
    message: "Please enter your email address.",
    name: "contact",
  },
  {
    type: "input",
    message: "What is the name of your project?",
    name: "project",
  },
  {
    type: "input",
    message: "Please write a short description of your project.",
    name: "description",
  },
  {
    type: "list",
    message: "Please select the type of license your project needs.",
    name: "license",
    choices: ["MIT", "APACHE 2.0", "BSD 3", "GPL 3.0", "None"],
  },
  {
    type: "input",
    message: "What command should be run to install dependencies?",
    name: "installer",
    default: "npm install",
  },
  {
    type: "input",
    message: "What command should be used to run tests?",
    name: "test",
    default: "npm run test",
  },
  {
    type: "input",
    message: "What info does the user need to know about using the repo?",
    name: "usage",
  },
  {
    type: "input",
    message:
      "What info does the user need to know about contributing to the repo?",
    name: "contribute",
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      console.log(err);
    }
  });
}

function init() {
  inquirer.prompt(questions).then(function (answers) {
    api.getUser(answers.username).then(function (response) {
      writeToFile(
        "goodReadme.md",
        generateMarkdown({ ...answers, ...response.data })
      );
    });
  });
}

init();
