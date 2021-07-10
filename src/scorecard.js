'use strict';

class Scorecard {
  constructor() {
    this.rolls = [];
    this.total = 0;
  };

  roll = pins => {
    if(pins > 10) {
      throw new Error('More than 10 pins detected, please check your roll');
    } else if (pins === 10) {
      this.rolls.push(pins);
      this.rolls.push(0);
    } else {
      this.rolls.push(pins);
    };
  };

  score = () => {
    for(let i = 0; i < 20; i+=2) {
      if (this.rolls[i] === 10) {
        this.total += this.rolls[i] + this.rolls[i+2] + this.rolls[i+3];
      } else if(this.rolls[i] + this.rolls[i+1] === 10) {
        this.total += this.rolls[i] + this.rolls[i+1] + this.rolls[i+2];
      } else {
        this.total += this.rolls[i] + this.rolls[i+1];
      };
    };
    return this.total;
  };

};