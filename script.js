console.log('Hello!');
// 1. Write an arrow function that takes a person's firstName and lastName and returns an object with properties for firstName and lastName.
const returnsAnObj = (fname, lname) => ({ firstName: fname, lastName: lname });
console.log(returnsAnObj('shivam', 'jha'));

// 2. Write an arrow function that takes a string and returns an object with properties for string length and its uppercase version.
const takesStringReturnObj = (str) => ({
  strLen: str.length,
  uppercase: str.toUpperCase(),
});
console.log(takesStringReturnObj('shiv'));

// 3. Write an arrow function that takes a person's firstName, lastName, age and phoneNumber and returns an object with properties for fullName, age and phoneNumber.
const personDetails = (fname, lname, age, phno) => ({
  fullname: fname + ' ' + lname,
  age: age,
  phonenumber: phno,
});
console.log(personDetails('shivam', 'jha', '25', '882373773'));

// 4. Write an arrow function that takes two words and returns an object with properties for concatenation and character count.
const returnConcat = (w1, w2) => ({
  concatenation: w1 + ' ' + w2,
  charCount: w1.length + w2.length,
});
// Expected Output: { concatenation: 'Hello World', charCount: 10 }
console.log(returnConcat('Hello', 'World'));

// 5. Write an arrow function that takes a radius and returns an object with properties for circumference and area of a circle. Use Math.PI method.
const calculateCircleProperties = (radius) => ({
  circumference: (2 * Math.PI * radius).toFixed(4),
  area: (Math.PI * radius * radius).toFixed(4),
});
console.log(calculateCircleProperties(5));
// Expected output: { circumference: 31.4159, area: 78.5398 }

// 6. Write an arrow function that takes two numbers and returns an object with properties for their difference and quotient.
const calculateDifferenceAndQuotient = (num1, num2) => ({
  difference: num1 - num2,
  quotient: num1 / num2,
});
console.log(calculateDifferenceAndQuotient(10, 2));
// Expected output: { difference: 8, quotient: 5 }

// 7. Write an arrow function that takes a sentence and returns an object with property for word count in that sentence.

const analyzeSentence = (sentence) => {
  const words = sentence.split(' ');
  return { wordCount: words.length };
};
console.log(analyzeSentence('JavaScript is fun'));
// Expected output: { wordCount: 3 }

// 8. Write an arrow function that takes a number and returns an object with properties for its square and cube.
const calculateSquareAndCube = (num) => ({
  square: num * num,
  cube: num * num * num,
});
console.log(calculateSquareAndCube(4));
// Expected output: { square: 16, cube: 64 }

// 9. Write an arrow function that takes a number and returns an object indicating whether it's positive or negative.
const checkNumber = (num) =>
  num > 0
    ? { isPositive: true, isNegative: false }
    : { isPositive: false, isNegative: true };
console.log(checkNumber(-7));
// Expected output: { isPositive: false, isNegative: true }
console.log(checkNumber(5));
// Expected output: { isPositive: true, isNegative: false }
