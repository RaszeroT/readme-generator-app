const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your full name?",
      name: "name",
    },
    {
      type: "input",
      message:
        "If you would like to leave you email to be contacted for questions please input it here, Otherwise leave blank.",
      name: "emailQuestions",
    },
    {
      type: "input",
      message: "What is the title for your project?",
      name: "title",
    },
    {
      type: "input",
      message: "What is a description of your project??",
      name: "description",
    },
    {
      type: "input",
      message:
        "Were there any contributors you would like to mention? Otherwise N/A.",
      name: "contributors",
    },
    {
      type: "input",
      message: "What did you learn while completing this project?",
      name: "iLearned",
    },
    {
      type: "input",
      message: "What are the steps for installing this application?",
      name: "install",
    },
    {
      type: "input",
      message:
        "If you have any test functions to how within this application, please explain the steps here.",
      name: "test",
    },
    {
      type: "input",
      message: "Are there any dependencies used in this project? name@version",
      name: "dependencies",
    },
    {
      type: "input",
      message: "What is the gitHub URL to the project",
      name: "github",
    },
    {
      type: "input",
      message: "Please enter the URL to the deployed website",
      name: "websiteURL",
    },
    {
      type: 'input',
      message: 'what would you like the label to your live webpage to state?',
      name: 'URLLabel'
    },
    {
      type: "input",
      message: "Please enter the file path for images here.",
      name: "imgFilePath",
    },
    {
      type: "checkbox",
      message: "Please check any licenses used on this project.",
      choices: [
        "Apache License 2.0",
        "GNU General Public License v3.0",
        "MIT license",
        "BSD 2-Clause 'Simplified' License",
        "BSD 3-Clause 'New' or 'Revised' License",
        "Boost Software License 1.0",
        "Creative Commons Zero v1.0 Universal",
        "Eclipse Public License 2.0",
      ],
      name: "license",
    },
  ])
  .then((data) => {
    fs.writeFile(
      "README.md",
      `
# Title:

${data.title} 

## Table of Contents:

[Description](#description)\n
[Installation](#installation)\n
[User Information](#user-information)\n
[Contributions](#contributions)\n
[Tests](#tests)\n
[Questions](#questions)\n
[What I Learned](#what-i-learned)\n
[Code in index.js](#code-in-javascript-index)\n
[Dependencies](#dependencies)\n
[Link to live site](#link-to-live-site)\n
[Link to gitHub Repo](#link-to-github-repository)\n
[Images Of website functionality](#images-of-webpage-functionality)\n
[License](#license)\n

## Description:

${data.description}

## Installation

${data.install}

## User Information

${data.github}\n
${data.emailQuestions}

## Contributors

${data.contributors}

## Tests 

${data.test}

## Questions

Please reach out to me if you have any further questions via:\n
${data.emailQuestions}\n
${data.github}

## What I learned:

${data.iLearned}

## Code in JavaScript index:

${data.JSFile}

## Dependencies 

${data.dependencies}

## Link to live site:

<a href="${data.websiteURL}">${data.URLLabel}</a>

## Images of webpage functionality:

<img src="${data.imgFilePath}" width="300" height="300"> 

## License

${data.license}
`,

      (err) =>
        err
          ? console.log(err)
          : console.log("Your professional README.md has been created!!")
    );
  });
