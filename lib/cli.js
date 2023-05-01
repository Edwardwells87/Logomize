const inquirer = require('inquirer');

class LogoMaker {
  constructor() {
    this.answers = inquirer.prompt([
      {
        type: 'input',
        message: 'Please provide up to 3 letters that represent your company:',
        name: 'initials'
      }
    ]);
  }
}

module.exports = LogoMaker;
