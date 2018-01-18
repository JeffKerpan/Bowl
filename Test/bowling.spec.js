// //*** npm run test (to run tests);
//
// import { expect } from 'chai';
// import main from '../bowling.js';
// import rolls from '../bowling.js';
// import frames from '../bowling.js';
// import total from '../bowling.js';
// import getRollsFromArgv from '../getRollsFromArgv.js';
// import getFinalScore from '../bowling.js';
// import getFramesFromRolls from '../bowling.js';
//
// //Create sum function
// const sum = (arr) => {
//   let sumTotal = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sumTotal += arr[i];
//   }
//   return sumTotal;
// }
//
// describe('Bowling', () => {
//   it('Should keep a record of rolls', () => {
//     var rolls = [1, 5, 6, 2];
//     getFramesFromRolls();
//
//     expect(rolls).to.equal([[1, 5], [6, 2]]);
//   });
// });
//
// describe('Bowling', () => {
//   it('Should sum a full game of zeros', () => {
//     let game1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
//
//     expect(sum(game1)).to.equal(0);
//     // expect(sum(game2)).to.equal(12);
//     // expect(sum(game3)).to.equal(11);
//   })
// });
//
// describe('Perfect Game', () => {
//
//   function rollPerfect(pins)  {
//     for (let i = 0; i < 12; i++) {
//       getRollsFromArgv(pins);
//       // console.log('PINS', pins);
//       // console.log(getRollsFromArgv());
//     }
//   }
//   it('Should sum a full game of strikes', () => {
//     // let game1 = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
//     rollPerfect(10);
//     getFinalScore();
//
//     expect(sum(rollsArray)).to.equal(300);
//   });
// });
