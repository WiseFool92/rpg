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

// 6 sided dice roll number generator
let diceRoll = function() {
  return Math.floor(Math.random() *6) +1;
}

// Check for win condition
let winCondition = function(player, opponent) {
  if (opponent.health <= 0) {
    return "Victory";
  } else if (player.health <= 0) {
    return "Epic Failure";
  }
}