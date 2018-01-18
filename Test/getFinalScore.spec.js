const getFinalScore = require('../getFinalScore.js');

import { expect } from 'chai';

describe('Final Score', () => {

  it('Should get a final score from a full game', () => {
    let rolls = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2];

    expect(getFinalScore(rolls)).to.deep.equal(30);
  })

  it('Should get a final score from a gutter ball full game', () => {
    let rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    expect(getFinalScore(rolls)).to.deep.equal(0);
  });


});
