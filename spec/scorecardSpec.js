'use strict';

describe('Scorecard', () => {

  let scorecard;

  beforeEach(() => {
    scorecard = new Scorecard();
  });

  it('can store user rolls', () => {
    scorecard.roll(4);
    expect(scorecard.rolls.length).toEqual(1);
  });






});