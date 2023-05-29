const fs = require('fs');

class ShapeMaker {
  constructor(answers) {
    let shapes = answers.shapes
    let svgGuts = "";
    
    if (shapes === "circle") {
      svgGuts = `<svg width="300" height="200">
  <circle cx="100" cy="100" r="100" fill="${answers.color}" />
  <text x="100" y="100" font-size="36px" text-anchor="middle" fill="${answers.fill}" dx="0" dy="10" >${answers.initials}</text>
</svg>`
    }
    else if (shapes === 'square') {
      svgGuts =  `<svg width="300" height="200" viewBox="0 0 300 200"">
      <rect width="200" height="200" style="fill:${answers.color};stroke-width:3;stroke:rgb(0,0,0)" />
      <text x="100" y="100" font-size="36px" text-anchor="middle" fill=${answers.fill}">${answers.initials}</text>
    </svg>`
    }
    else {
      svgGuts =  `<svg width="300" height="200" viewBox="0 0 300 200">
      <polygon points="150, 30 240, 170 60, 170" fill="${answers.color}" />
      <text x="150" y="110" text-anchor="middle" fill="${answers.fill}" font-size="36" dx="0" dy="20">${answers.initials}</text>
    </svg>`
       } 
       fs.writeFile('logo.svg', svgGuts, (err) => {
        if (err) throw err;
        console.log('File saved!');
      });
    }
  }
module.exports = ShapeMaker