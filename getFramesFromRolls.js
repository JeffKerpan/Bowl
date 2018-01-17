const getFramesFromRolls = (rollsArray) => {
  let framesArray = []

  for(let i = 0; i < rollsArray.length; i++) {
    let pins = rollsArray[i];

    //condition is true, do this
    if(rollsArray[i] === 10){
      rollsArray.slice(i, i + 1);
      framesArray.push([10,0]);

    //condition is false, do this
    } else {
      const frame = rollsArray.slice(i, i + 2);

      if(frame[0] + frame[1] > 10){
        throw "ERROR: A frame has more than 10 pins down " + frame[0] + '+' + frame[1];
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
