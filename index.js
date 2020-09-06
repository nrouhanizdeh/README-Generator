// import required packages
var inquirer = require("inquirer");
var fs = require('fs');

// prompt user 
inquirer.prompt([
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?"
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?"
  },
  {
    type: "input",
    name: "title",
    message: "What is the project title?"
  },
  {
    type: "input",
    name: "description",
    message: "What is the project description?"
  },  {
    type: "input",
    name: "installation",
    message: "What are the installation instructions?"
  },
  {
    type: "input",
    name: "usage",
    message: "What is the project usage?"
  },
  {
    type: "input",
    name: "test",
    message: "What are the test instructions?"
  },  
  {
    type: "input",
    name: "contribute",
    message: "How can users contibute to the project?"
  },
  {
    type: "checkbox",
    message: "What is the license type?",
    name: "stack",
    choices: [
      "Academic Free License v3.0",
      "Apache license 2.0",
      "Artistic license 2.0",
      "Boost Software License 1.0",
      "BSD 2-clause Simplified license",
      "BSD 3-clause New or Revised license",
      "BSD 3-clause Clear license",
      "Creative Commons license family",
      "Creative Commons Zero v1.0 Universal",
      "Creative Commons Attribution 4.0",
      "Creative Commons Attribution Share Alike 4.0",
      "Do What The F*ck You Want To Public License",
      "Educational Community License v2.0",
      "Eclipse Public License 1.0",
      "European Union Public License 1.1",
      "GNU Affero General Public License v3.0",
      "GNU General Public License family",
      "GNU General Public License v2.0",
      "GNU General Public License v3.0",
      "GNU Lesser General Public License family",
      "GNU Lesser General Public License v2.1",
      "GNU Lesser General Public License v3.0",
      "ISC",
      "LaTeX Project Public License v1.3c",
      "Microsoft Public License",
      "MIT",
      "Mozilla Public License 2.0",
      "Open Software License 3.0",
      "PostgreSQL License",
      "SIL Open Font License 1.1",
      "University of Illinois/NCSA Open Source License",
      "The Unlicense",
      "zLib License"
    ]
  }
]).then(function(data) {

  var output = `
  # ${data.title}

  ## Table of Contents
  * [Description](#Description)
  * [Installation](#Unstallation)
  * [Usage](#Usage)
  * [Tests Instructions](#Tests)
  * [Contribute](#contribute)
  * [License](#License)
  * [Questions](#questions)
  
  ## Description
  ${data.description}

  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}

  ## Tests
  ${data.test}

  ## Contribute
  ${data.contribute}

  ## License
  ${data.stack}

  ## Questions
  For more information, please visit [https://github.com/${data.email}](https://github.com/${data.email}).
  [${data.email}](mailto:${data.email}) with any additional questions or comments.

  `

  fs.writeFile("README.md", output, function(err) {

    if (err) {
      return console.log(err);
    }

    console.log("Success!");

  });
});
