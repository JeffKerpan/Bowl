//*** Without const it will get total score with npm run bowling2.js

const getFinalScore = (rolls) => {
  var frame = 1;

  return rolls.reduce((previous, current, i, array) => {
    // Bonus rolls
    if(frame >= 10)
      return previous + current;

    // Strike
     if(current === 10) {
        frame++;
        return previous + current + array[i + 1] + array[i + 2];
    }

      // Second Roll of a Frame
      if(frame % 1 !== 0) {
        frame = Math.floor(++frame);

      // SPARE
        if(current + array[i - 1] === 10)
          return previous + current + array[i + 1];
          // NOT A SPARE
        return previous + current;

      }
      // 1ST ROLL OF A FRAME
        frame += .5;
        // console.log('rolls', array);
        return previous + current;
  }, 0);
}
// finalScore();

module.exports = getFinalScore;
