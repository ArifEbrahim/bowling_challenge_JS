'use strict';

class Scorecard {
  constructor() {
    this.rolls = [];
  };

  roll = pins => {
    if(pins > 10) {
      throw new Error('More than 10 pins detected, please check your roll');
    } else {
      this.rolls.push(pins);
    };
  };

  score = () => {
    return this.rolls.reduce((total, amount) => total + amount);
  };

};