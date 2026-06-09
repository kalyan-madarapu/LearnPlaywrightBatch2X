var v=10;
let l = 20;
const c = 3.14;
var browser="chrome"
var browser="firefox"//redeclaration allowed with var
browser="edge"//reassignment aallowed with var

//ex
var testcase={'login','logout','signup'}
for(var i=0;i<testcase.length;i++){
    console.log("running test",testcase[i])
}
console.log("loop counter leaked outside:",i)//i is accessible outside the loop with var

function sayHello(){
    console.log("Hello")
}
sayHello();