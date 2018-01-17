const getRollsFromArgv = () => {
  let rollsArray = process.argv.slice(2);

  rollsArray.map((number, index, array) => {
    array[index] = number * 1;
  });

//*** Commented out to get TESTS to 'work' ***
  rollsArray.map(pinsOneRoll => {
    if(Number.isInteger(pinsOneRoll)){
      // console.log("integer");
      if(pinsOneRoll > 10 || pinsOneRoll < 0) {
        throw 'ERROR, Please input a number between 0 and 10';
      }
    } else {
      console.log("not an integer");
      throw 'ERROR, Please input a whole number'
    }
    // console.log('rollsArray', rollsArray);
  });
  console.log('ROLLS ARRAY: ', rollsArray);
  return rollsArray;
}
module.exports = getRollsFromArgv;
