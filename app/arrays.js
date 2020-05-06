// 1. Given an array, move the element at index 0 to the last position in the array. Return the modified array.
// Example:
// input: ['This', 'is', 'a', 'split', 'sentence.']
// output: ['is', 'a', 'split', 'sentence.', 'This']

function rearranger(arr) {
  modifiedSentence = arr;
  firstItem = modifiedSentence[0];
  modifiedSentence.shift();
  modifiedSentence.push(firstItem);
  return modifiedSentence;
}

// ------------------------------------------

// 2. Given an array of numbers, return the largest number in the array.
// Example:
// input: [6, 4, 8, 33, 42, 10]
// output: 42

function largestNum(arr) {
  let largestNum = 0;
  let duplicateObject = {};

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    duplicateObject[element] = 1;

    for (let j = 0; j < arr.length; j++) {
      let checkElement = arr[j];
      if (j != i && checkElement == element) {
        duplicateObject[element]++;
      }
    }
  }

  arr.forEach((element) => {
    if (element > largestNum) {
      largestNum = element;
    }
  });

  if (duplicateObject[largestNum.toString()] > 1) {
    let largestNumDuplicates = {};
    largestNumDuplicates[largestNum] = duplicateObject[largestNum];
    return largestNumDuplicates;
  } else {
    return largestNum;
  }
}

// ------------------------------------------

// 3. Given an array of numbers, return an array where every element in the given array is multiplied by the length of the given array.
// Example:
// input:  [4, 2, 1, 7]
// output: [16, 8, 4, 28]

function elemsTimesLength(arr) {
  let multipleArray = [];
  for (let index = 0; index < arr.length; index++) {
    let element = arr[index];
    let elementMultiple = element * arr.length;
    multipleArray.push(elementMultiple);
  }
  return multipleArray;
}

// ------------------------------------------

// 4. Given a multidimensional array, return a single dimension array with all of the primitive data elements within the multidimensional array.
// Example:
// input:  [[['legume'], 3, []], 2, ['tree', [{}, [5]]]]
// output: ['legume', 3, 2, 'tree', 5]
// Primitive data types - https://developer.mozilla.org/en-US/docs/Glossary/Primitive

function arrayFlattener(arr) {
  let flatArray = arr;
  let notFlattened = true;
  while (notFlattened) {
    let intermediateArray = [];

    for (let i = 0; i < flatArray.length; i++) {
      let element = flatArray[i];
      if (Array.isArray(element)) {
        for (let j = 0; j < element.length; j++) {
          intermediateArray.push(element[j]);
        }
      } else if (typeof element != "object") {
        intermediateArray.push(element);
      }
    }

    flatArray = intermediateArray;
    let flatCount = 0;
    for (let k = 0; k < flatArray.length; k++) {
      if (!Array.isArray(flatArray[k])) {
        flatCount++;
      }
    }

    if (flatCount == flatArray.length) {
      notFlattened = false;
    }
  }
  return flatArray;
}

// ------------------------------------------

//5. Flights from Boise. Write a function that will use the following data to return the cost of flights from boise to a neighboring city, by default return the standard cost unless firstClass is set to true

let flights = [
  {
    from: "BOI",
    to: "LAX",
    prices: {
      standard: 500,
      firstClass: 2200,
    },
  },
  {
    from: "BOI",
    to: "SEA",
    prices: {
      standard: 800,
      firstClass: 1200,
    },
  },
  {
    from: "BOI",
    to: "CAN",
    prices: {
      standard: 750,
      firstClass: 6200,
    },
  },
];

function flightCost(destination, firstClass = false) {
  //***hint: use the find method***
  let destinationLowerCase = destination.toLowerCase();
  let flightObject = flights.find(
    (element) => element.to.toLowerCase() == destinationLowerCase
  );
  if (firstClass) {
    return flightObject.prices.firstClass;
  } else {
    return flightObject.prices.standard;
  }
}

// ------------------------------------------

// 6. Given a number, return the corresponding user object from the staff array that has the given number as the value of their id property. If no user is found, return an object with an error property and value of "No user with that id."
// Example:
// input: 17
// output: {id: 17, name: 'St. MaryLou de la Playa Carmen'}
//Example:
// input: 1000
// output: { error: "No user with that id." }

let staff = [
  { id: 1, name: "Jon" },
  { id: 2, name: "Yuli" },
  { id: 21, name: "Peter" },
  { id: 17, name: "St. MaryLou de la Playa Carmen" },
  { id: 51, name: "Doug" },
  { id: 881, name: "Paul" },
  { id: 0, name: "Jon" },
  { id: 999, name: "Timma" },
];

function findById(id) {
  let staffObject = staff.find((element) => element.id == id);
  if (staffObject) {
    return staffObject;
  } else {
    return { error: "No user with that id." };
  }
}

// ------------------------------------------

// 7. Write a function that accepts a name argument and will loop over theBand members and return the band member's name and the instrument that he/she plays. Use string concatenation or interpolation to return a sentence with the following structure: "[band-members-name] is in the band and plays the [band-members-instrument]".
// Example:
// input: 'Johnny P'
// output: "Johnny P is in the band and plays the sax"

let theBand = {
  homeCity: "Birmingham",
  members: [
    {
      name: "Johnny P",
      instrument: "sax",
    },
    {
      name: "River",
      instrument: "drums",
    },
    {
      name: "Kris",
      instrument: "guitar",
    },
  ],
};

function bandMemberDetails(name) {
  let member = theBand.members.find((element) => element.name == name);
  if (!member) {
    let regexString = name.toLowerCase() + "*";
    let regex = RegExp(regexString);
    let membersArray = theBand.members;
    for (let i = 0; i < membersArray.length; i++) {
      let isMatch = regex.test(membersArray[i].name.toLowerCase());
      if (isMatch) {
        member = membersArray[i];
        return `${member.name} is in the band and plays the ${member.instrument}`;
      }
    }
  } else {
    return `${name} is in the band and plays the ${member.instrument}`;
  }
}
