import { Character } from './../src/rpg';

import { diceRoll } from './../src/rpg';

import { winCondition } from './../src/rpg';

import { battleRoyal } from './../src/rpg';

import { Monster } from './../src/rpg';

import { Game } from './../src/rpg';

test('Generates random number between 1-6', () => {
  expect(Game.diceRoll()).toBeGreaterThan(0);
  expect(Game.diceRoll()).toBeLessThan(7);
});

test('Generates random number between 1-6', () => {
  let result = Math.floor(Math.random() *6) + 1;
  expect(result).toBeGreaterThan(0);
  expect(result).toBeLessThan(7);
});

test('highest rolled number wins battle round & delivers negative health', () => {
  let player = new Character("warrior", 4, 2, 3, 10);
  let opponent = new Monster("monster", 2, 4, 3, 10);
  expect(player.health).toEqual(10)
  expect(opponent.health).toBe(10)
  let game = new Game(player,opponent);
  player.diceRoll = function () {
    return 1
  };
  opponent.diceRoll = function () {
    return 5
  }
  game.battleRoyal();
  expect(player.health).toEqual(9000)
  expect(opponent.health).toBe(10)
});

test('highest rolled number wins battle round & delivers negative health', () => {
  let player = new Character("warrior", 4, 2, 3, 10);
  let opponent = new Monster("monster", 2, 4, 3, 10);
  expect(player.health).toEqual(10)
  expect(opponent.health).toBe(10)
  let game = new Game(player,opponent);
  player.diceRoll = function () {
    return 1
  };
  opponent.diceRoll = function () {
    return 5
  }
  game.battleRoyal();
  expect(player.health).toEqual(9)
  expect(opponent.health).toBe(10)
});
