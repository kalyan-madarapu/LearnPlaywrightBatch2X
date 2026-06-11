// Increment and decrement operators: pre vs post

// 1) Pre-increment (++a): increments first, then returns the new value
let a = 10;
let preInc = ++a;
console.log("Pre-increment");
console.log("a after ++a:", a); // 11
console.log("preInc:", preInc); // 11

// 2) Post-increment (a++): returns current value, then increments
let b = 10;
let postInc = b++;
console.log("Post-increment");
console.log("b after b++:", b); // 11
console.log("postInc:", postInc); // 10

// 3) Pre-decrement (--a): decrements first, then returns the new value
let c = 10;
let preDec = --c;
console.log("Pre-decrement");
console.log("c after --c:", c); // 9
console.log("preDec:", preDec); // 9

// 4) Post-decrement (a--): returns current value, then decrements
let d = 10;
let postDec = d--;
console.log("Post-decrement");
console.log("d after d--:", d); // 9
console.log("postDec:", postDec); // 10

// Example inside expressions to show evaluation order
let x = 5;
let y = 2;
let sum1 = ++x + y; // x becomes 6, sum1 = 6 + 2 = 8
let sum2 = x++ + y; // sum2 = 6 + 2 = 8, then x becomes 7
console.log("Expression examples");
console.log("x after expressions:", x); // 7
console.log("sum1:", sum1); // 8
console.log("sum2:", sum2); // 8