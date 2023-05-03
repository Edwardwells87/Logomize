var colorToCompare = answers.color
var colorToFill = answers.fill

class Colors{
  constructor(colorToCompare, colorToFill) {
 
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