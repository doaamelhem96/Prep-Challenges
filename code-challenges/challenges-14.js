'use strict';

// Resource:
// split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// slice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// indexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// lastIndexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
// join: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Using the slice and indexOf/lastIndexOf methods, return the last word in a string
//
// Note: consider that the string may have one word but never empty
//
// Input: "I did my waiting 12 years of it in Azkaban"
// Output: "Azkaban"
//
// Input: "Impossible"
// Output: "Impossible"
//

const LastWord = (str) => {
    // write your code here
   
        // Trim any whitespace at the end of the string
        str = str.trim();
        
      
        var lastIndex = str.lastIndexOf(' ');
      
       
        if (lastIndex === -1) {
          return str;
        }
       
        return str.slice(lastIndex + 1);
      }
      

// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
//  You can try to do the same task using the split method
//
//  Input: "you dare use my spells against me, potter"
//  Output: "potter"

const LastWord_2 = (str) => {
    // write your code here
    var words = str.split(' ');
  
    // If there is only one word, return it
    if (words.length === 1) {
      return words[0];
    }
    
    // Otherwise, return the last word
    return words[words.length - 1];
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Required:
//
// Number 2 was easy right?, ok then using the splice method replace all the "I" with "We", "am" with "are" and "was" with "were"
//
// Note: you may use another method for search (indexOf)
//
// Input:  "I thought you had a plan"
// Output: "We thought you had a plan"
//
// Input: "I was there 3000 years ago"
// Output: "We were there 3000 years ago"

// Input: "I am Venom"
// Output: "We are Venom"
//

const replaceWords = (str) => {
    // write your code here
    
      
        var words = str.split(' ');
        
        for (var i = 0; i < words.length; i++) {
          if (words[i] === 'I') {
            words.splice(i, 1, 'We');
          } else if (words[i] === 'am') {
            words.splice(i, 1, 'are');
          } else if (words[i] === 'was') {
            words.splice(i, 1, 'were');
          }
        }
        
   
        return words.join(' ');
       
     
      
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 04:
// Optional:
//
// Write a function that "joins" the array of words together and puts a comma "," after every five words
//
// Input:["move","it","away","from","the","street"] 
// Output: "move it away from the, street" 
//

const arrToStr = (arr) => {
    // write your code here
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 05:
// Optional:
//
// Simon got a string manipulation question for his interview,
// it asked him to replace the duplicated letters in a string to an indicator and counter
// as in the example:
//
// Input:"aaaa bbb sdf"
// Output: "a4 b3 s1d1f1"
//
// Input:"door"
// Output: "d1o2r1"
//
// help him by writing the function
//

const letterCounter = (str) => {
    // write your code here
    str = str.trim();
    function getLastWord(str) {
  // Trim any whitespace at the end of the string
  str = str.trim();
  
  // Find the last index of a space character in the string
  var lastIndex = str.lastIndexOf(' ');

  // If there are no spaces in the string, return the whole string
  if (lastIndex === -1) {
    return str;
  }
  
  // Otherwise, return the substring starting from the last space character
  return str.slice(lastIndex + 1);
}

// Example usage:
var str = "Hello world!";
var lastWord = getLastWord(str);
console.log(lastWord); // Outputs: "world!"


}
// -------------------------------------------------------------------------------------------------------


module.exports = { LastWord, LastWord_2, replaceWords, arrToStr, letterCounter };