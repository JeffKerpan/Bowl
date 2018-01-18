const getFinalScore = require('../getFinalScore.js');

import { expect } from 'chai';

describe('Final Score', () => {

  it('Should get final score from full game', () => {
    let rolls = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2];

    expect(getFinalScore(rolls)).to.deep.equal(30);
  })

  it('Should get final score from gutter ball full game', () => {
    let rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    expect(getFinalScore(rolls)).to.deep.equal(0);
  });

  it('Should get final score from full game with a Strike', () => {
    let rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 1, 0];

    expect(getFinalScore(rolls)).to.deep.equal(12);
  });

  it('Should get final score from full game with multiple Strikes', () => {
    let rolls = [10, 3, 1, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

    expect(getFinalScore(rolls)).to.deep.equal(258);
  });

  it('Should get final score from full game with a Spare', () => {
    let rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1, 1, 0];

    expect(getFinalScore(rolls)).to.deep.equal(12);
  });

  it('Should get final score from full game with all Spares', () => {
    let rolls = [9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9];

    expect(getFinalScore(rolls)).to.deep.equal(190);
  })

});
