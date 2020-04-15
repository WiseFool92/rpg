export class Character {
  constructor (name, strength, health) {
    this.name = userName;
    this.strength = strength;
    this.health = health;
    
    const warrior = new Character ("", 4, 10);
    const wizard = new Character ("", 2, 10);
    const rogue = new Character ("", 3, 10);
  }
};


export class Game {

  // 6 sided dice roll number generator
  diceRoll = function() {
    //console.log("1 - diceRoll() works");
    return Math.floor(Math.random() * 6) +1;
  };

  // Check for win condition
  winCondition = function(player, opponent) {
    if (opponent.health <= 0) {
      return "Victory";
    } else if (player.health <= 0) {
      return "Epic Failure";
    }
  };
}