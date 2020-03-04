const inquirer = require("inquirer");
const fs = require("fs");

/*
project name
author
project description
user interface
doployed app link
*/

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your project's name?"
    },
    {
      type: "input",
      name: "author",
      message: "Who is the author?"
    },
    {
      type: "input",
      name: "description",
      message: "What is your project about?"
    },
    {
      type: "input",
      name: "imgPath",
      message: "Specify the path for the user interface image or gif?"
    },
    {
      type: "input",
      name: "link",
      message: "Specify the link to your deplpoyed project?"
    }
  ])
  .then(data => {
    const fileName = "README.md";
    const fileContent = `# ${data.name} \n ${data.author} \n ## Description \n ${data.description} \n ## User Interface \n ![](${data.imgPath}) \n ## Deployed Project \n You can find the deployed project [here](${data.link}). \n File generated using [README.md Generator](https://github.com/erodrigueztoimil/readme_generator.git)`;

    fs.writeFile(fileName, fileContent, err => {
      if (err) {
        throw new Error("Ups! There is something wrong.");
      }

      console.log("Your README.md file has been created!");
    });
  });
