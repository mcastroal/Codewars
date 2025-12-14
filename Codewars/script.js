//==============================
//         1st Problem!
//==============================
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function evenOrOdd(integer) {
    if (integer % 2 === 0)
        return "Even"
    else
        return "Odd"
};

console.log(evenOrOdd(6));
// I felt very comfortable with this problem because all I had to do was make sure the number is divisible by 2, although it did work I am looking at other peoples examples and realized I could have added a curly bracket after the parentheses of my if statement so that my else would look like } else { which is what I am used to seeing 

//==============================
//        2nd Problem!
//==============================
// Implement a function which convert the given boolean value into its string representation.

function booleanToString(b){
    return b.toString()
}
// For this one it took me a few minutes to remember what the method was because I had done this function before but it was easy once I remembered

//==============================
//         3rd Problem!
//==============================
// Write a function findNeedle() that takes an array full of junk but containing one "needle" After your function finds the needle it should return a message (as a string) that says: "found the needle at position " plus the index it found the needle, so: "found the needle at position 6"
function findNeedle(haystack) {
  let position = haystack.indexOf("needle");
  return `found the needle at position ${position}`
}
// This problem was pretty straighforward I just needed to find the position of the first/only instance of "needle" so I used indexOf method

//==============================
//         4th Problem!
//==============================
//Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
function toCamelCase(str){
  let words = str.split(/[-_]/);
  let camelCased = words[0];
  
  for(let i = 1; i < words.length; i++){
    let word = words[i];
    if (word.length === 0) continue
    let capitalized = word.charAt(0).toUpperCase() + word.slice(1);
    camelCased += capitalized;
  }
  return camelCased;
}
// For this one I initially struggled because I started my loop from index 0 so the first word would show up twice, but then I edited it to start at the 1st index and included an if statement to skip any empty strings

//==============================
//         5th Problem!
//==============================
// In this kata, you are asked to square every digit of a number and concatenate them. For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81) Note: The function accepts an integer and returns an integer.
function squareDigits(num){
  let digits = num.toString().split('');
  let squaredString = digits.map(function(digit){
    let n = Number(digit);
    return n*n;
  }).join('');
  return Number (squaredString);
}
// I found this problem challenging at first, but then I broke it down and it started to make more sense. I remember one day someone said it is easier to organize numbers if they are in strings, so I started with that, I knew I had to use the map method because I was going to create a new array with the original array numbers and square them, and lastly i had to combine the array into a single string.

//==============================
//         6th Problem!
//==============================
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits. If the function is passed a valid PIN string, return true, else return false.
function validatePIN (pin) {
 if (pin.length !== 4 && pin.length !== 6) {
   return false;
 }
  for (let i = 0; i <pin.length; i++){
    let char = pin[i];
    if (char < '0' || char >'9'){
      return false;
    }
  }
  return true;
}
// I initially made a function that only checked if the pin length was 4 or 6 but then I failed the validation for number only, so I refactored my code to include if statements. 

//==============================
//         7th Problem!
//==============================
// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string. If the string's length is odd, return the middle character. If the string's length is even, return the middle 2 characters.
function getMiddle(s) {
  let lengths = s.length;
  let middle = Math.floor(lengths / 2);
  
  if (lengths % 2 === 0){
    return s[middle - 1] + s[middle];
  } else {
    return s[middle];
  }
}
// This problem felt like an add on to problem #1, I used math.floor to find the middle index and used an if statement to handle the two conditions

//==============================
//         8th Problem!
//==============================
//Given a non-empty array of integers, return the result of multiplying the values together in order. Example: [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
function grow(x){
  let result = 1;
  for (let i = 0; i < x.length; i++){
    result = result * x[i];
  }
  return result;
}
// This problem was straighforward, I knew I had to loop through the array and multiply each number together.
