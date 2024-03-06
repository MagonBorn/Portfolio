const prompt = require('prompt-sync')({ sigint: true });

// ----------Field Class----------
class Field {
  // Constructor
  constructor(field) {
    this._field = field;
    this.playerLocation = []
    this.startingPosition;
    console.log(`Welcome to \'Find Your Hat\'.\n\nTo play, simply type the direction you wish to move:\n\'u\' for up\n\'d\' for down\n\'l\' for left\n\'r\' for right.\n\nThe rules are simple:\n1. Don't fall down any holes\n2. Don't fall off the edge\n3. You can't return to a space you've already visited\n4. Find Your Hat\n`);
  }

  // ----------Getters----------
  // Get the starting position of the player
  get startingPosition() {
    for (let i = 0; i < this._field.length; i++) {
      for (let j = 0; j < this._field[i].length; j++) {
        if (this._field[i][j] === '*') {
          this.playerLocation.push(i, j);
        }
      }
    }
    return this.playerLocation;
  }

  // ----------Methods----------
  // Game loop
  runGame() {
    console.log(this.print());
    this.movePlayer(this.checkUserInput());
  }

  // Display play area as a grid in the terminal
  print() {
    let line = [];
    for (let fieldRow in this._field) {
      line += this._field[fieldRow].join('') + '\n';
    }
    return line;
  }

  // Check the user has provided a valid movement input
  checkUserInput() {
    let direction = prompt('Which direction do you wish to move? ').toLowerCase();
    if (!/[udlrnews]/.test(direction) === true) {
      console.log(`ALERT: Invalid direction: please type \n\'u\' for up, \n\'d\' for down, \n\'r\' for right, \n\'l\' for left.\n`)
      this.checkUserInput();
    } else {
      return direction;
    }
  }

  // Move the player in the direction indicated by the user input
  movePlayer(direction) {
    let newLocation = []
    switch (direction) {
      case 'u': case 'n':
        newLocation.push(this.playerLocation[0] - 1, this.playerLocation[1]);
        newLocation[0] < 0 ? this.endGame() : this.locationChecks(newLocation);
        break;
      case 'd': case 's':
        newLocation.push(this.playerLocation[0] + 1, this.playerLocation[1]);
        newLocation[0] === this._field.length ? this.endGame() : this.locationChecks(newLocation);
        break;
      case 'r': case 'e':
        newLocation.push(this.playerLocation[0], this.playerLocation[1] + 1);
        newLocation[1] === this._field[0].length ? this.endGame() : this.locationChecks(newLocation);
        break;
      case 'l': case 'w':
        newLocation.push(this.playerLocation[0], this.playerLocation[1] - 1);
        newLocation[1] < 0 ? this.endGame() : this.locationChecks(newLocation);
    }
  }

  // Run a number of checks against the users position
  locationChecks(arr) {
    if (this._field[arr[0]][arr[1]] === 'O') { this.endGame('hole'); };
    if (this._field[arr[0]][arr[1]] === '*') { console.log(`\nYou can't return to this space\n`); this.updateMap(this.playerLocation); };
    if (this._field[arr[0]][arr[1]] === '^') { this.winGame() };
    this.updateMap(arr);
  }

  // Update map to show player position and route
  updateMap(arr) {
    this._field[arr[0]][arr[1]] = '*';
    this.playerLocation.splice(0, 1, arr[0], arr[1]);
    this.runGame();
  }

  // Lose condition
  endGame(reason = 'oob') {
    reason === 'oob' ? console.log(`GAME OVER: you fell off the grid`) : console.log(`GAME OVER: you fell down a hole`);
    let replay = prompt(`\nDo you want to play again? \'y\' for yes, \'n\' for no `).toLowerCase();
    if (replay === 'y') {
      let newRows = prompt(`Specify the number of rows, e.g., 4: `);
      let newCols = prompt(`Specify the number of columns, e.g., 4: `);
      let newHoles = prompt(`Specify the difficulty: what percent of the grid should be covered in holes?  `);
      let newGrid = new Field(Field.generateField(newRows, newCols, newHoles))
      newGrid.runGame();
    } else {
      console.log(`Thank for you playing. Goodbye`);
      throw new Error(`End Game`);
    }
  }

  // Win condition
  winGame() {
    console.log(`You have Won, thanks for playing`);
    throw new Error(`End Game`);
  }

  // Generate a random grid pattern based on passed in rows, columns and percentage of holes that should be in the grid
  static generateField(row, col, percent) {
    let field = [];
    const tiles = [];
    let randRow = Math.floor(Math.random() * row);
    let randCol = Math.floor(Math.random() * col);
    let hatPos = true;
    // Populate the tiles array with supplied percentage of holes and path tiles
    for (let i = Math.floor(row * col * percent / 100) + 1; i > 0; i--) {
      tiles.push('O');
    }
    for (let i = Math.floor(row * col * (100 - percent) / 100) + 1; i > 0; i--) {
      tiles.push('░');
    }
    // Construct the grid and remove used tile from tiles array
    for (let i = row; i > 0; i--) {
      let gridRow = [];
      for (let j = col; j > 0; j--) {
        let tileIndex = Math.floor(Math.random() * tiles.length);
        if (tiles[tileIndex] === '░') {
          gridRow.push(tiles[tileIndex]);
          tiles.splice(tileIndex, 1);
        }
        if (tiles[tileIndex] === 'O') {
          gridRow.push(tiles[tileIndex]);
          tiles.splice(tileIndex, 1);
        }
      }
      // Add completed row to the grid
      field.push(gridRow);
    }
    // Place hat in random position on the grid
    field[Math.floor(Math.random() * row)][Math.floor(Math.random() * col)] = '^';
    // Check to make sure the player isn't placed on the same position as the hat
    while (hatPos) {
      if (field[randRow][randCol] !== '^') {
        field[randRow][randCol] = '*';
        hatPos = false;
      } else {
        randRow = Math.floor(Math.random() * row);
        randCol = Math.floor(Math.random() * col);
      }
    }
    return field;
  }
}
const myField = new Field(Field.generateField(5, 20, 25));
myField.runGame();