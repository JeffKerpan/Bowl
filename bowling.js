const getRollsFromArgv = require('./getRollsFromArgv');
const getFramesFromRolls = require('./getFramesFromRolls');
const getFinalScore = require('./getFinalScore');

const main = () => {
  const rolls = getRollsFromArgv()
  console.log('rolls: ', rolls);
  // console.log('rollsArray: ', rollsArray);

  const frames = getFramesFromRolls(rolls)
  console.log('frames: ', frames);

  const total = getFinalScore(rolls);
  console.log('FINAL SCORE: ', total);
  // console.log('rollsArray: ', rollsArray);

  // console.log('totalScore: ', totalScore)
};

main();
