const Calculate = {
  factorial(inputNumber) {
    if (inputNumber === 0) {
      return 1;
    } else {
      return inputNumber * this.factorial(inputNumber - 1);
    }
  }
}

module.exports = Calculate;