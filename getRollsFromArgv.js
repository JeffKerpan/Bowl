const getRollsFromArgv = () => {

  // Normalize the inputs to be able to use them in functions and slice off the first two indices to just get the individual rolls inputs
  let rollsArray = process.argv.slice(2);

  // Using map to ensure numbers are whole numbers
  rollsArray.map((number, index, array) => {
    array[index] = number * 1;
  });

  // ERROR handling
  // Using map to check if the inputs are numbers and to make sure that the inputs are between 0 and 10
  rollsArray.map(pinsOneRoll => {
    if(Number.isInteger(pinsOneRoll)) {
      if(pinsOneRoll > 10 || pinsOneRoll < 0) {
        throw 'ERROR: Please input a Whole Number between 0 and 10';
      }
    } else {
      throw 'ERROR, Please input a Whole Number'
    }
  });
  return rollsArray;
};

module.exports = getRollsFromArgv;
