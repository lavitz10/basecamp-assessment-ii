/**
 * #1
 *
 * Create an object called 'me' that has three keys, 'firstname', 'age', and 'state'.
 * Assign the keys the appropriate values.
 */
var me = {firstname: "Huy",age: 23,state: "AZ"};
// CODE HERE

/**
 * #2
 *
 * Add a new key/value pair to the 'me' object using dot notation.
 * The new key should be 'faveColor'. Set it to your favorite color as a string.
 */
me.faveColor = "Blue"; 
// CODE HERE

/**
 * #3
 *
 * Below is an object, 'message'. Below it, add a 'text' key using bracket notation,
 * and assign it a string of whatever you would like.
 */

  // DON'T TOUCH THE CODE BELOW
var message = {
  date: new Date(),
  userName: me.firstname
};
// DON'T TOUCH THE CODE ABOVE
message["text"]= "Hello";
// CODE HERE

/**
 * #4
 *
 * Create an object called 'adjustCount' and create two methods. One called 'upVote' and one called 'downVote'.
 * upVote() should take in a number, add one to it, and return the number.
 * downVote() should take in a number, subtract one from it, and return the number.
 */
var adjustCount ={
  upVote:function(num1) { return (num1 + 1);
  },
  downVote:function(num2){return (num2 - 1);}

 }
// CODE HERE

/**
 * #5
 *
 * Create an array called 'myFriends' with four of your friends names.
 */
var myFriends = ["Ti", "Tom","Tim","Tai"];
// CODE HERE

/**
 * #6
 *
 * Add a fifth friends name to the end of your 'myFriends' array.
 */
myFriends[4] = "Tot";
// CODE HERE

/**
 * #7
 *
 * Create a 'myArrayCopy' variable. It should equal the 'myArray' variable.
 * Use a built-in JavaScript method to create a copy.
 */

// DON'T TOUCH THE CODE BELOW
var myArray = [1, 2, 3, 4];
// DON'T TOUCH THE CODE ABOVE
// CODE HERE
var myArrayCopy = myArray;
/**
 * #8
 *
 * Below is a array, 'myNumbers'. Create a function called 'evensOnly'
 * that returns an array of only even numbers.
 */

//DON'T TOUCH THE CODE BELOW
var myNumbers = [333, 1, 4, 5, 511, 34, 88, 77, 222];
//DON'T TOUCH THE CODE ABOVE
function evensOnly() {
  // CODE HERE
  var eArray = [];
  for (i = 0; i < myNumbers.length; i++){
    if ((myNumbers[i]) % 2 == 0){
       eArray.push(myNumbers[i]);
    }
  }
  return eArray;
}


/**
 * #9
 *
 * Using .filter(), return only your friends of the array of people below.
 * Assign it to a variable called 'trueFriends'.
 */

// CODE HERE
var peopleIknow = [
  { name: "Steve", friend: true },
  { name: "Dan", friend: false },
  { name: "Bart", friend: true },
  { name: "Sarah", friend: false },
  { name: "Michelle", friend: false },
  { name: "Holly", friend: true }
];
var trueFriends = peopleIknow.filter(function(a){
  return a.friend === true;});
/**
 * #10
 *
 * Create a function called 'indexFinder' that loops over an array and returns a new array
 * of the indexes of the array passed into the function. For example, passing the array [243, 123, 4, 12]
 * into the function would return [0,1,2,3]. Create a new variable called 'indexes' and set it to contain
 * the indexes of 'randomNumbers'.
 */

let randomNumbers = [1, 3453, 34, 456, 32, 3, 2, 0];
var indexes = [];
var indexFinder = (arr) => {
  arr.map((c,k)=>{indexes.push(k);})
  return indexes;
}
indexFinder(randomNumbers);