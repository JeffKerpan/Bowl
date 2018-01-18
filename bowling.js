const getRollsFromArgv = require('./getRollsFromArgv');
const getFramesFromRolls = require('./getFramesFromRolls');
const getFinalScore = require('./getFinalScore');

//One main function to pull in the rolls, frames and final score functions
const main = () => {
  const rolls = getRollsFromArgv()
  console.log('rolls: ', rolls);
  // console.log('rollsArray: ', rollsArray);

  const frames = getFramesFromRolls(rolls)
  console.log('frames: ', frames);

  const total = getFinalScore(rolls);
    // if(frame >= 11)
      console.log('FINAL SCORE: ', total);
      
  // console.log('rollsArray: ', rollsArray);

  // console.log('totalScore: ', totalScore)
};

main();
