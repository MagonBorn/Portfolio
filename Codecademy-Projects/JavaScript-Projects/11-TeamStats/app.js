const team = {
  _players: [
    { firstName: 'Matt', lastName: 'Mason', age: 21 },
    { firstName: 'Bob', lastName: 'Obo', age: 22 },
    { firstName: 'Peter', lastName: 'Olio', age: 23 }
  ],
  _games: [
    { opponent: 'Bears', teamPoints: 23, opponentPoints: 22 },
    { opponent: 'Tigers', teamPoints: 20, opponentPoints: 24 },
    { opponent: 'Eagles', teamPoints: 22, opponentPoints: 22 }
  ],

  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  addPlayer(newFirstName, newLastName, newAge) {
    this._players.push({firstName: newFirstName, lastName: newLastName, age: newAge});
  },

  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    this._games.push({opponent: newOpponent, teamPoints: newTeamPoints, opponentPoints: newOpponentPoints});
  }
};

team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Titans', 100, 98);
console.log(team.players);
console.log(team.games);
