

class Colors{
  constructor(answers) {
    var colorToCompare = answers.color
var colorToFill = answers.fill
 
const regexColors = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i;
const matchColor = colorToCompare.match(regexColors);
const fillColor = colorToFill.match(regexColors);
  if (!matchColor || !fillColor){
      error('color must be a hex code');
    } else {
      console.log('color is valid');
    }
  }
}
module.exports = Colors