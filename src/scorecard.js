'use strict';

class Scorecard {
  constructor() {
    this.rolls = [];
  };

  roll = pins => this.rolls.push(pins);
};