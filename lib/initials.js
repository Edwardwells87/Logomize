const LogoMaker = require('./cli');

class InitialsLength {
  constructor() {
    this.check();
  }

  async check() {
    const logoMaker = new LogoMaker();
    const answers = await logoMaker.answers;
    const initials = answers.initials;

    if (initials.length > 3) {
      error('Initials can only be 1-3 letters');
    } else {
      console.log('Initials are valid');
    }
  }
}

new InitialsLength();