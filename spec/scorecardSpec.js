'use strict';

describe('Scorecard', () => {

  let scorecard;

  beforeEach(() => {
    scorecard = new Scorecard();
  });

  describe('roll method', () => {
    it('allows players to make rolls', () => {
      scorecard.roll(4);
      expect(scorecard.rolls.length).toEqual(1);
    });
  
    it('throws an error if more than 10 pins knocked down in a roll', () => {
      expect(() => {scorecard.roll(11);}).toThrowError('More than 10 pins detected, please check your roll')
    });
  });



  describe('score method', () => {
    it('has a score method', () => {
      expect(scorecard.score).toBeDefined();
    });
  });






});