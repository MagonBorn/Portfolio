// Write a function, dogFactory(). It should:

// have 3 parameters: name, breed, and weight (in that order)
// expect name and breed to be strings
// expect weight to be a number
// return an object
// have each of those parameters as keys on the returned object returned with the values of the arguments that were passed in

const dogFactory = (name, breed, weight) => {
  return {
    _name: name,
    _breed: breed,
    _weight: weight,

    get name() {
      return console.log(`My name is ${this._name}`);
    },

    get breed() {
      return console.log(`I am a ${this._breed}`);
    },

    get weight() {
      return console.log(`I weight ${this._weight}`);
    },

    set name(newName) {
      this._name = newName;
    },

    set breed(newBreed) {
      this._breed = newBreed;
    },

    set weight(newWeight) {
      this._weight = newWeight;
    },

    bark() {
      console.log('ruff! ruff!');
    },

    eatTooManyTreats() {
      this._weight++
      console.log(`I ate too many treat`);
    }
  }
}

const joeDog = dogFactory('Joe', 'Pug', 27);
// Should return { name: 'Joe', breed: 'Pug', weight: 27 }

joeDog.name;
joeDog.breed;
joeDog.weight;
joeDog.bark();
joeDog.eatTooManyTreats();
joeDog.weight;