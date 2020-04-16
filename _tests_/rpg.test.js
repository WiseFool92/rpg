import { Character } from './../src/rpg';

import { diceRoll } from './../src/rpg';

import { winCondition } from './../src/rpg';

import { battleRoyal } from './../src/rpg';

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
  let character = new Character();
  if (player.diceRoll < opponent.diceRoll);
  expect(battleRoyal).toBe(-1);
//  else expect(opponent.health).toBe(-1)
});
