import { Character } from './../src/rpg';

import { diceRoll } from './../src/rpg';

import { winCondition } from './../src/rpg';

test('Generates random number between 1-6', () => {
  expect(diceRoll()).toBeGreaterThan(0);
  expect(diceRoll()).toBeLessThan(7);
});

test('Generates random number between 1-6', () => {
  let result = Math.floor(Math.random() *6) + 1;
  expect(result).toBeGreaterThan(0);
  expect(result).toBeLessThan(7);
});

// test(''), () => {
//   expect(winCondition).
// }