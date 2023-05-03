

class InitialsLength {
  constructor(answers) {

    if (answers.length > 3) {
      error('Initials can only be 1-3 letters');
    } else {
      console.log('Initials are valid');
    }
  }
}

module.exports = InitialsLength