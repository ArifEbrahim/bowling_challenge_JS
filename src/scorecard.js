'use strict';

class Scorecard {
  constructor() {
    this.rolls = [];
    this.total = 0;
    this.isscoreCalculated = false;
  };

  roll = pins => {
    if(pins > 10) {
      throw new Error('More than 10 pins detected, please check your roll');
    } else if (pins === 10) {
      this._storeStrike(pins);
    } else {
      this._storeRoll(pins);
    };
  };

  score = () => {
    for(let i = 0; i < 20; i+=2) {
      if (this._isStrike(i)) {
        this._strikeBonus(i);
      } else if(this._isSpare(i)) {
        this._spareBonus(i);
      } else {
        this._normalScore(i);
      };
    };
    this.isscoreCalculated = true;
    return this.total;
  };

  isGameOn = () => this.rolls.length < 20;

  display = () => this.rolls.toString().replace(',,',',');

  // private methods 

  _storeRoll = (pins) => this.rolls.push(pins);

  _isStrike = (i) => this.rolls[i] === 10;

  _strikeBonus = (i) => {
    if (this._isStrike(i) && this._isStrike(i+2) && this._isStrike(i+4)) {
      this.total += 30
    } else if (this._isStrike(i) && this._isStrike(i+2)) {
      this.total += this.rolls[i] + this.rolls[i+2] + this.rolls[i+4];
    } else {
      this.total += this.rolls[i] + this.rolls[i+2] + this.rolls[i+3];
    };
  };

  _isSpare = (i) => this.rolls[i] + this.rolls[i+1] === 10;

  _spareBonus = (i) => this.total += this.rolls[i] + this.rolls[i+1] + this.rolls[i+2];

  _normalScore = (i) => this.total += this.rolls[i] + this.rolls[i+1];

  _storeStrike = (pins) => {
    this._storeRoll(pins);
    this._storeRoll('');
  };
};