export class Character {
  constructor (name, strength, health) {
    this.name = userName;
    this.strength = strength;
    this.intellect = intellect;
    this.dex = dex;
    this.health = health;
    this.items = [];
    this.maxItems = 5;
    this.level = 1;
    
    const warrior = new Character ("", 4, 2, 3, 10);
    const wizard = new Character ("", 2, 4, 3, 10);
    const rogue = new Character ("", 3, 3, 4, 10);
  }
};

export class Monster extends Character {
  monsterClassGenerator = function () {
    return Math.floor(Math.random() * 3) +1;
  }
};


export class Game {

  // 6 sided dice roll number generator
  diceRoll = function() {
    //console.log("1 - diceRoll() works");
    return Math.floor(Math.random() * 6) +1;
  };

  battleRoyal = function() {
    this.player = player;
    this.opponent = opponent;
    if (player.diceRoll > opponent.diceRoll)
      return opponent.health -= 1;
      else 
      return player.health -= 1;
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