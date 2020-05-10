// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
  console.log()
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * The count Variable is outside the function on the 2nd counter and inside on the first. 
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * Counter1 uses closure - It has a function nested inside it. 
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 * Counter 1 would be preferable if you wanted to invoke/call it multiple times resetting it each time, 
 * for example, you could start a counter
 *  to keep track of the score of a game and invoke the function again to keep track of a different 
 * game without effecting the count of the original game.
 * 
 * Counter 2 would be preferable for a single occurence count as it is more concise and a smaller
 * ammount of code. Or if we wanted to use count again elsewhere in the code (however global variables are considered bad practice).
 *  
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){

  let score = Math.floor(Math.random() * 3);
  return score;
};

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) 
and a number of innings and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(callback, numOfInnings){
 let homeScore = 0;
 let awayScore = 0;
 for (let i = 0; i<=numOfInnings; i++) {
   homeScore += callback()
   awayScore += callback()
    }
  return {
    "Home": homeScore, 
    "Away": awayScore  
  }
}

(finalScore(inning, 9));


/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

function scoreBoard(callback, numOfInnings){
  let homeScore = 0;
  let awayScore = 0;
  let counter = 0;
  let scoreInfo = [];
  let finalHomeScore = 0;
  let finalAwayScore = 0;
 
    for (let i = 1; i<=numOfInnings; i++) {
    homeScore = callback()
    awayScore = callback()
    finalHomeScore += homeScore
    finalAwayScore += awayScore
    counter++
     if (counter === 1) {
         scoreInfo.push(i +"st inning: " + homeScore + " - " + awayScore)
     }
     else if (counter === 2) {
         scoreInfo.push(i+ "nd inning: " + homeScore + " - " + awayScore)
     }
     else if (counter === 3) {
         scoreInfo.push(i+ "rd inning: " + homeScore + " - " + awayScore)
     } else {
     scoreInfo.push(i+ "th inning: " + homeScore + " - " + awayScore)
     }
   }
    scoreInfo.push("Final Score: " + finalHomeScore + " - " + finalAwayScore)
  
   return scoreInfo;
 } 
 (scoreBoard(inning, 9))


