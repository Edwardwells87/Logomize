const initialsLength = require("./initials");


describe('initialsLength', () => {
  test('should throw an error if initials are longer than 3 letters', () => {
    let someParam = { initials: "abslkd" };
    expect(() => initialsLength(someParam)).toThrow('initials can only be 1-3 letters');
  });

 // test('should NOT throw a error if initials are 3 letters or under', () => {
   // let someParam = { initials: "abc" };
   // expect(() => initialsLength(someParam)).not.toThrow('initials can only be 1-3 letters')
   
  })
//})