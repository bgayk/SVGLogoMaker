
shapes = require("./lib/shapes.js");
inquirer = require("inquirer");
prompts = require("./lib/prompts.js");
fs = require("fs");

// write data to a file 
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.error(err) : console.log('Success!'));
}


// Initialize Routine will call the functions to load the questions, ask the questions, paginate the results, and write the file
const init = async () => {
    // Ask Questions about logo
    const response = await inquirer.prompt(prompts.fetchPrompts());

    // Generate shape data
    const data = shapes.generateSVGData(response);

    // write LOGO.svg to file to
    // application install directory 
    writeToFile(`logo.svg`, data);
}


// Function call to initialize app
init();