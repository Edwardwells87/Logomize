const inquirer = require('inquirer');

class LogoMaker {
  constructor() {
    this.answers = inquirer.prompt([
      {
        type: 'input',
        message: 'Please provide up to 3 letters that represent your company:',
        name: 'initials'
      },
      {
        type: 'list',
        message: 'Select a shape:',
        name: 'shapes',
        choices: [
          'circle',
          'square',
          'triangle',
        ]
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
    ]);
  }
}

module.exports = LogoMaker;
