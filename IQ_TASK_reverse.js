// Reverse a string using a loop
function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// Reverse an array using a loop
function reverseArray(arr) {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

// Example usage
const text = 'Hello, world!';
const numbers = [1, 2, 3, 4, 5];

console.log(`Original string: ${text}`);
console.log(`Reversed string: ${reverseString(text)}`);
console.log(`Original array: ${JSON.stringify(numbers)}`);
console.log(`Reversed array: ${JSON.stringify(reverseArray(numbers))}`);
