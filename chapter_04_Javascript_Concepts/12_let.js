let testStatus="pending";
if(testStatus==="pending"){
    let executestatus="1200";
    console.log("test is in pending stateis",executestatus);
}
console.log(executestatus);//error because of block scope with let
