const Colors = require("./colors");


describe('colors', () => {
  test('should throw an error if input does not fit in regex', () => {
    let someParam = { colors: "not a color" };
    expect(() => colors(someParam)).toThrow('color must be a hex code');
  });

   
  })
//})