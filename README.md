# Bowling Game Score

[Bowling-Score]:
http://bowlingballgalaxy.com/how-to-keep-score-in-bowling/Sample1game.bmp 'bowling score card'

![Bowling Score][Bowling-Score]

## How to install npm packages to the the Game running and Tests to run:

`npm install`

`npm install mocha --save--dev`

`npm install chai --save--dev`

`npm install babel --save--dev`

`npm install babel-cli --save--dev`

## Add to .babelrc file if it is not already present to allow for ES6 functions

```
{
  "presets": ["es2015"]
}
```

## The package.json file should contain:

```
{
  "name": "bowlinggame",
  "version": "1.0.0",
  "description": "",
  "main": "bowling.js",
  "scripts":
  {
    "test": "mocha --compilers
     js:babel-core/register ./test/**/*.spec.js"
  },
  "author": "",
  "license": "ISC",
  "devDependencies":
   {
    "babel": "^6.23.0",
    "babel-cli": "^6.26.0",
    "babel-core": "^6.26.0",
    "babel-preset-es2015": "^6.24.1",
    "chai": "^4.1.2"
  }
}
```

## The game is run in the Command license

### Type into the Command Line followed by integers:

`node bowling.js`

`node bowling.js 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0`

log should populate in the console
#### FINAL SCORE: 0

The above is an example of an entire game rolled of zeros.
I have it set up to input an entire game into the command line.


`node bowling.js 10 10 10 10 10 10 10 10 10 10 10 10`

log should populate in the console
#### FINAL SCORE: 300

This is an example of an entrie game rolled of strikes.


`node bowling.js 10 3 1 10 10 10 10 10 10 10 10 10 10`

log should populate in the console
#### FINAL SCORE: 258

### CURRENT SCORE

If a partial game is inputed then it will keep track of and log CURRENT SCORE:

`node bowling.js 10`

log should populate in the console
#### FINAL SCORE: 10

`node bowling.js 9 1`

log should populate in the console
#### FINAL SCORE: 10

`node bowling.js 1 6 5 2 10`

log should populate in the console
#### FINAL SCORE: 24

`node bowling.js 1 6 10 5 3 9 1 2 0`

log should populate in the console
#### FINAL SCORE: 47


## TESTING:

### To run the tests

Type into the Command Line:

`npm run test`

I tried to come up with plenty of examples for the tests.
