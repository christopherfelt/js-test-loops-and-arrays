// 1. Write a function that will iterate over an alphabetized string and return the
// missing letter.If there isn't a missing letter, return "no missing letters".
//Example:
// input: 'qrsuv'
// output: 't'
// Example:
// input: 'cdefghi'
// output: 'no missing letters'
// Hint: Utilize the string prototype method charCodeAt and generic method fromCharCode

function letterChecker(str) {
  //   let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let firstLetterUnicode = str.toLowerCase().charCodeAt(0);

  for (let i = 1; i < str.length; i++) {
    let letterUnicode = str.charCodeAt(i);

    if (letterUnicode != firstLetterUnicode + i) {
      return String.fromCharCode(letterUnicode - 1);
    }
  }
  return "no missing letters";
}

// ------------------------------------------

// 2. Given an array of numbers and a target number, determine if any two numbers in the
// array can add up to the value of the target number.Return true or false
// Example:
// input: [2,4,6,3], 7
// output: true (because 4+3)

function sumEqualsTarget(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        return true;
      }
    }
  }
  return false;
}

// ------------------------------------------

// 3. Given an array of numbers, sort the array such that all even numbers don't change
// their position but all odd numbers are sorted in ascending order.Return the sorted array.
// Example:
// input:  [2, 9, 4, 3, 6, 6, 1, 5, 8]
// output: [2, 1, 4, 3, 6, 6, 5, 9, 8]

function oddAscender(arr) {
  let oddNumbers = [];
  let oddNumberIndices = [];
  let sortedArray = arr;
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (element % 2 != 0) {
      oddNumbers.push(element);
      oddNumberIndices.push(i);
    }
  }

  oddNumbers.sort(function (a, b) {
    return a - b;
  });
  for (let j = 0; j < oddNumbers.length; j++) {
    let oddElement = oddNumbers[j];
    let oddElementIndex = oddNumberIndices[j];
    sortedArray.splice(oddElementIndex, 1, oddElement);
  }
  return sortedArray;
}
