import { Character } from './../src/rpg';

import { diceRoll } from './../src/rpg';

import { winCondition } from './../src/rpg';

import { battleRoyal } from './../src/rpg';

import { Monster } from './../src/rpg';

import { Game } from './../src/rpg';

test('Generates random number between 1-6', () => {
  expect(diceRoll()).toBeGreaterThan(0);
  expect(diceRoll()).toBeLessThan(7);
});

test('Generates random number between 1-6', () => {
  let result = Math.floor(Math.random() *6) + 1;
  expect(result).toBeGreaterThan(0);
  expect(result).toBeLessThan(7);
});

test('highest rolled number wins battle round & delivers negative health', () => {
  let player = new Character("warrior");
  let opponent = new Monster();
  let game = new Game(player,opponent);
  if (player.diceRoll < opponent.diceRoll);
  expect(battleRoyal).toBe(-1);
//  else expect(opponent.health).toBe(-1)
});

const craig = new Monster('Craig', 4, 11);
const pip = new Character('Pip', 10, 12);
const game = new Game(pip, craig);

const warrior = new Character ("", 4, 2, 3, 10);
const wizard = new Character ("", 2, 4, 3, 10);
const rogue = new Character ("", 3, 3, 4, 10);
