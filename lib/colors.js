const LogoMaker = require('./cli');

class Colors{
  constructor() {
    this.check();
  }

  async check() {
    const logoMaker = new LogoMaker();
    const answers = await logoMaker.answers;
    const colors = answers.colors;
const regexColors = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i;
const matchColor = color.match(regexColors);
  if (matchcolor = !){
      error('Initials can only be 1-3 letters');
    } else {
      console.log('color is valid');
    }
  }
}