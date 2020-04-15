export function pingPong(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else  {
      output.push(i);
    }
  }
  return output;
}

export Class Character {
  constructor (warrior, wizard, rogue) {
    this.warrior = warrior;
    this.wizard = wizard;
    this.rogue = rogue;
  }
};