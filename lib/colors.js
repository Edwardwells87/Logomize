const LogoMaker = require('./cli');

class Colors{
  constructor() {
    this.check();
  }

  async check(answers) {
    const logoMaker = new LogoMaker();
    const colors = answers.colors;
const regexColors = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i;
const matchColor = color.match(regexColors);
  if (!matchColor){
      error('color must be a hex code');
    } else {
      console.log('color is valid');
    }
  }
}
module.exports = Colors