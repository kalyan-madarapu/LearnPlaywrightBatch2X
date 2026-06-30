let unknown:unknown ="hello";
if(typeof unknown === "string"){
    console.log("Hi");
}
let message:string ="hello";
let username:string;
let userid:number;
//function annotation
function greet(name:string):string{
    return  `Hello,${name}!`;
}
//arrow function annotation
const multiply= (a:number,b:number):number=>a*b;
//object annotations, here every where type is getting added in ts files

let users:{name:string;age:number} ={
    name:"john",
    age:30

};