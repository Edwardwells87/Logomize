const inquirer = require('inquirer');
//const fs = require('fs');
const ShapeMaker = require('./lib/shapes');
const InitialsLength = require("./lib/initials");
const Colors = require("./lib/colors")

function LogoMaker() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'Please provide up to 3 letters that represent your company:',
        name: 'initials'
      },

      {
        type: 'list',
        name: 'shapes',
        message: 'Select a shape',
        choices: ['circle', 'square', 'triangle']
      },

      {
        type: 'input',
        message: "Please enter a hexadecimal code for the shape's color here:",
        name: 'color'
      },

      {
        type: 'input',
        message: "Please enter a hexadecimals code for the letter's color here:",
        name: 'fill'
      }
    ])
    .then((answers) => {
      console.log(answers)
       return Promise.all([
        new InitialsLength(answers),
       new Colors(answers),
       new ShapeMaker(answers),
       
      ])
})
   // }
  // .then((shapeMakerResult) => {
  // All functions have completed successfully, so write the file shouldnt be hard
  //   const svgCode = shapeMakerResult;
  //  console.log('this far-----------');
  // fs.writeFile('logo.svg', svgCode, (err) => {
  //  if (err) throw err('please try again');
  // console.log('Logo file has been generated in the root folder');
  // });
  //});
}

LogoMaker()