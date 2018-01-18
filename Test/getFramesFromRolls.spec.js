const getFramesFromRolls = require('../getFramesFromRolls.js');

const expect = require('chai').expect;

describe('Converts Frames to Rolls', () => {

  it('Should get frames from rolls', () => {
    let rolls = [1, 5, 6, 2];

    expect(getFramesFromRolls(rolls)).to.deep.equal([[1, 5], [6, 2]]);
  });

  it('Should get frames from rolls with Gutter Balls', () => {
    let rolls = [0, 0, 0, 0];

    expect(getFramesFromRolls(rolls)).to.deep.equal([[0, 0], [0, 0]]);
  });

});
