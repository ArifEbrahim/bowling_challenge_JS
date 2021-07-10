'use strict';

class Scorecard {
  constructor() {
    this.rolls = [];
    this.total = 0;
  };

  roll = pins => {
    if(pins > 10) {
      throw new Error('More than 10 pins detected, please check your roll');
    } else {
      this.rolls.push(pins);
    };
  };

  score = () => {
    for(let i = 0; i < 20; i+=2) {
      if(this.rolls[i] + this.rolls[i+1] === 10) {
        this.total += this.rolls[i] + this.rolls[i+1] + this.rolls[i+2]
      } else {
        this.total += this.rolls[i] + this.rolls[i+1]
      };
    };
    return this.total;
  };

};