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

  it('Should get frames from rolls with a Strike', () => {
    let rolls = [1, 5, 6, 2, 10];

    expect(getFramesFromRolls(rolls)).to.deep.equal([[1, 5], [6, 2], [10, 0]]);
  });

  it('Should get frames from rolls with a Spare', () => {
    let rolls = [1, 5, 6, 2, 9, 1];

    expect(getFramesFromRolls(rolls)).to.deep.equal([[1, 5], [6, 2], [9, 1]]);
  })

});
