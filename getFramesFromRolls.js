const getFramesFromRolls = (rollsArray) => {
  let framesArray = [];

  // Looping over the rolls array
  for(let i = 0; i < rollsArray.length; i++) {
    // let pins = rollsArray[i];

    // If current roll is a strike take that current index and the next index and then push [10, 0] into the frames array
    if(rollsArray[i] === 10){
      rollsArray.slice(i, i + 1);
      framesArray.push([10,0]);

    // If the current roll is not a strike then just take the current index and the next index and it will push those as an array into the frames array
    } else {
      const frame = rollsArray.slice(i, i + 2);

      // If the current index plus the next index add to greater than 10 it will throw an error
      if(frame[0] + frame[1] > 10){
        throw "ERROR: A frame has more than 10 pins down " + frame[0] + '+' + frame[1];

        // If the frames array has more than 10 non-bonus frames then it will throw an error
      } else if (framesArray.length > 10) {
        throw 'ERROR: Please only enter 10 frames';
      }
      framesArray.push(frame);
      i++;
      // console.log('framesArray', framesArray);
    }
  }
  // console.log('about to return framesArray', framesArray);
  return framesArray;
};

// get_rollsArray_to_framesArray(rollsArray);

module.exports = getFramesFromRolls;
