import { Character } from './../src/rpg';

import { diceRoll } from './../src/rpg';

import { winCondition } from './../src/rpg';

test('Generates random number between 1-6', () => {
  
  expect(diceRoll).toBeGreaterThan(0);
  expect(diceRoll).toBeLessThan(7);
});

// test(''), () => {
//   expect(winCondition).
// }