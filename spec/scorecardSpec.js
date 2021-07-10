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

  describe('when there is no special scoring', () => {
    it('returns 0 for a gutter game', () => {
      for (let i = 0; i < 20; i++) {
        scorecard.roll(0);
      };
      expect(scorecard.score()).toEqual(0);
    });

    it('retuns the score for a normal game', () => {
      for (let i = 0; i < 20; i++) {
        scorecard.roll(2);
      };
      expect(scorecard.score()).toEqual(40);

    });
  });

  describe('returns the correct score', () => {
    it('when there is a spare', () => {
      scorecard.roll(5);
      scorecard.roll(5);
      scorecard.roll(2);
      for (let i = 0; i < 17; i++) {
        scorecard.roll(0);
      };
      expect(scorecard.score()).toEqual(14);
    });
  });

  describe('returns the correct score', () => {
    it('when there is 1 strike', () => {
      scorecard.roll(10);
      scorecard.roll(2);
      scorecard.roll(2);
      for (let i = 0; i < 16; i++) {
        scorecard.roll(0);
      };
      expect(scorecard.score()).toEqual(18);
    });

    it('when there are 2 strikes', () => {
      scorecard.roll(10);
      scorecard.roll(10);
      scorecard.roll(2);
      scorecard.roll(2);
      for (let i = 0; i < 15; i++) {
        scorecard.roll(0);
      };
      expect(scorecard.score()).toEqual(40);
    });

    it('when there are 3 strikes', () => {
      scorecard.roll(10);
      scorecard.roll(10);
      scorecard.roll(10);
      for (let i = 0; i < 14; i++) {
        scorecard.roll(0);
      };
      expect(scorecard.score()).toEqual(60);
    });
  });

  describe('returns the correct score for frame 10', () => {
    it('with no special scoring', () => {
      for (let i = 0; i < 18; i++) {
        scorecard.roll(0);
      };
      scorecard.roll(2);
      scorecard.roll(2);
      expect(scorecard.score()).toEqual(4);
    });

    it('with a spare', () => {
      for (let i = 0; i < 18; i++) {
        scorecard.roll(0);
      };
      scorecard.roll(5);
      scorecard.roll(5);
      scorecard.roll(2);
      expect(scorecard.score()).toEqual(12);
    });

    it('with 1 strike', () => {
      for (let i = 0; i < 18; i++) {
        scorecard.roll(0);
      };
      scorecard.roll(10);
      scorecard.roll(5);
      scorecard.roll(2);
      expect(scorecard.score()).toEqual(17);
    });

  });


});
