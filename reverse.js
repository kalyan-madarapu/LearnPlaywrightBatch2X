// Reverse a string and reverse an array

function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

function reverseArray(arr) {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

const sampleText = 'Hello, world!';
const sampleArray = [1, 2, 3, 4, 5];

console.log('Original string:', sampleText);
console.log('Reversed string:', reverseString(sampleText));
console.log('Original array:', sampleArray);
console.log('Reversed array:', reverseArray(sampleArray));
