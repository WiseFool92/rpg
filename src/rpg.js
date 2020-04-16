export class Character {
  constructor (name, strength, intellect, dex, health) {
    this.name = name;
    this.strength = strength;
    this.intellect = intellect;
    this.dex = dex;
    this.health = health;
    this.items = [];
    this.maxItems = 5;
    this.level = 1;
  }
};

export class Monster extends Character {
  // monsterClassGenerator = function () {
  //   return Math.floor(Math.random() * 3) +1;
  // }
};
  
  export class Game {
    constructor(character, monster) {
      this.player = character;
      this.opponent = monster;
    }
    
    // 6 sided dice roll number generator
    diceRoll() {
      return Math.floor(Math.random() * 6) +1;
    };
    
    battleRoyal() {
      let player = this.player;
      let opponent = this.opponent;
      if (player.diceRoll() > opponent.diceRoll()) {
        return opponent.health -= 1;
      } else {
        return player.health -= 1;
      }
    };
    
    // Check for win condition
    winCondition(player, opponent) {
      if (opponent.health <= 0) {
        return "Victory";
      } else if (player.health <= 0) {
        return "Epic Failure";
      }
    };
  };
  
  const game = new Game(player, opponent);
  
  const warrior = new Character ("", 4, 2, 3, 10);
  const wizard = new Character ("", 2, 4, 3, 10);
  const rogue = new Character ("", 3, 3, 4, 10);
