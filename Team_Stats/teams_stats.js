const team = {
 _players: [{firstName: 'Marcia', lastName: 'Parker', age: 17},
   {firstName: 'April', lastName: 'Ally', age: 18},
   {firstName: 'Ashley', lastName: 'Taro', age: 21},],

 _games: [{opponent: 'Putis', teamPoints: 25,opponentPoints: 12},
    {opponent: 'Grilo', teamPoints: 51, opponentPoints: 24},
    {opponent: 'Oloco', teamPoints: 43, opponentPoints: 40}],
  
    get players() {return this._players;},
    get games() {return this._games;},
  
    addPlayer(firstName, lastName, age) {
    const player = {
     firstName: firstName,
     lastName: lastName,
     age: age
   };
   this._players.push(player);
 },

 addGame(opponent, teamPoints, opponentPoints) {
  const game = {
    opponent: opponent,
    teamPoints: teamPoints,
    opponentPoints: opponentPoints
  };
  this._games.push(game);
},
};
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'CurryBunny', 76);

team.addGame('Siri', 2, 3);
team.addGame('Alexa', 10, 2);
team.addGame('Whatnow', 20, 45);

console.log(team.players);
console.log(team.games);