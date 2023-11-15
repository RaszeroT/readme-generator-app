const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is the gitHub URL to the project",
      name: "github",
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
      message: "What did you learn while completing this project?",
      name: "ILearned",
    },
    {
      type: "checkbox",
      message: "Which packages and methods were used in this project?",
      choices: [
        "inquirer",
        "fs require",
        ".then",
        "fs.writefile",
        ".appendChild",
      ],
      name: "JSFile",
    },
    {
      type: "input",
      message: "Please enter the URL to the deployed website",
      name: "websiteURL",
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
    // dependencies
  ])
  .then((data) => {
    fs.writeFile(
      "README.md",
      `
# Title:

${data.title} 

##Table of Contents:

[Description](#Description)
[What I Learned](#)
[Code in script.js](#)
[Link to live site](#)
[Link to gitHub Repo](#)
[Images Of website functionality](#)
[License](#)


## Description:

${data.description}

## What I learned and/or struggled with:

${data.ILearned}

## Code in script.js:

{data.JSFile}

## Link to live site:

<a href="${data.websiteURL}">${data.title}</a>

## Link to GitHub repository:

<a href="${data.github}">${data.name}'s GitHub</a>

## Images of webpage functionality:

<img src="${data.imgFilePath}" width="300" height="300"> 

## License

${data.license}
`,

      (err) =>
        err
          ? console.log(err)
          : console.log("Your professional README.md is being created!!")
    );
  });
