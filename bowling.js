const getRollsFromArgv = require('./getRollsFromArgv');
const getFramesFromRolls = require('./getFramesFromRolls');
const getFinalScore = require('./getFinalScore');

// One main function to pull in the rolls, frames, score and final score functions
const main = () => {
  const rolls = getRollsFromArgv();

  const frames = getFramesFromRolls(rolls);

  const total = getFinalScore(rolls);
    console.log(frames.length >= 10 ? 'FINAL SCORE:' : 'SCORE:', total);
};

main();
