var a=10;
console.log(a);
 function printHello(){
    console.log("Hello World");
    var a=20;//local scope
    //var is bad, its not rising the error when again we declared a=20

    console.log(a);

  
 }
printHello();
var a=30;//global scope
console.log(a);