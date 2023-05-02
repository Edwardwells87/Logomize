const LogoMaker = require('./cli');

class ShapeMaker {
  constructor() {
    this.check();
  }

  async check() {
    const logoMaker = new LogoMaker();
    const answers = await logoMaker.answers;
    const shapes = answers.shapes;
    const fill = answers.fill
    const color = answers.color
  
    if (shapes === "circle"){
      return(
        `<svg width="300" height="200">
  <circle cx="100" cy="100" r="100" fill="${answers.color}" />
  <text x="100" y="100" font-size="36px" text-anchor="middle" fill="${answers.fill}"dx="0" dy="10" >${answers.initials}</text>
</svg>`)
    } 
    else if (shapes === 'square'){
      return( 
      `<svg width="300" height="200" viewBox="0 0 300 200"">
      <rect width="200" height="200" style="fill:${answers.color};stroke-width:3;stroke:rgb(0,0,0)" />
      <text x="100" y="100" font-size="36px" text-anchor="middle" fill=${fill}">${answers.initials}</text>
    </svg>`)
    } 
    else {
      return (
      `<svg width="300" height="200" viewBox="0 0 300 200">
      <polygon points="150, 30 240, 170 60, 170" fill="${answers.color}" />
      <text x="150" y="110" text-anchor="middle" fill="${fill}" font-size="36"dx="0" dy="20">${answers.initials}</text>
    </svg>`)
    }

    }
  }
