let obj1={ name: 'John', age: 30 };
const obj2 = { name: 'John', age: 30 };
console.log(obj1 === obj2); // false, different references
console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); // true, same content   
