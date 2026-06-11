// Reverse a string using join method
function reverseString(input) {
  let arr = [];
  // Add each character in reverse order to array
  for (let i = input.length - 1; i >= 0; i--) {
    arr.push(input[i]);
  }
  // Use join to combine array into string
  return arr.join('');
}

const original = 'PlayWright';
const result = reverseString(original);
console.log(`Original: ${original}`);
console.log(`Reversed: ${result}`);


