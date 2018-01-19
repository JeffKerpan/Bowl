const getFramesFromRolls = (rollsArray) => {
  let framesArray = [];

  // Looping over the rolls array
  for(let i = 0; i < rollsArray.length; i++) {

    // If current roll is a strike then push [10, 0] into the frames array
    if(rollsArray[i] === 10) {
      rollsArray.slice(i, i + 1);
      framesArray.push([10, 0]);

    // If the current roll is not a strike then just take the current index and the next index and it will push those as an array into the frames array
    } else {
      const frame = rollsArray.slice(i, i + 2);

      // If the current index plus the next index add to greater than 10 as a frame it will throw an error
      if(frame[0] + frame[1] > 10) {
        throw "ERROR: A frame has more than 10 pins down (" + frame[0] + ' + ' + frame[1] + ") > 10";

        // If the frames array has more than 10 non-bonus frames then it will throw an error
      } else if (framesArray.length > 10) {
        throw 'ERROR: Please only enter 10 frames and any applicable bonus rolls';
      }
      framesArray.push(frame);
      i++;
    }
  }
  return framesArray;
};

module.exports = getFramesFromRolls;
