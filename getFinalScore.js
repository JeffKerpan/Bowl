const getFinalScore = (rolls) => {
  var frame = 1;

  // Using reduce to add up the frame scores
  return rolls.reduce((previous, current, i, array) => {

    // Bonus rolls
    if(frame >= 10)
      return previous + current;

    // Current roll is a Strike then add the previous roll and current roll plus the next two rolls(when applicable) for the bonus
     if(current === 10 && array[i + 2] !== undefined) {
        frame++;
        console.log(array[i + 1], array[i + 2]);
        return previous + current + array[i + 1] + array[i + 2];
    }

      // 2nd roll of a Frame and then go to the next frame
      if(frame % 1 !== 0) {
        frame = Math.floor(++frame);

      // Current roll is a Spare adding the previous roll, current roll and next roll for the bonus
        if(current + array[i - 1] === 10 && array[i + 1] !== undefined)
          return previous + current + array[i + 1];

        // Current roll not a Spare adding previous roll and the current roll
        return previous + current;

      }

      // 1ST roll of a frame will increment frame to account for second roll of a frame if needed
        frame += .5;
        return previous + current;
  }, 0);
};


module.exports = getFinalScore;
