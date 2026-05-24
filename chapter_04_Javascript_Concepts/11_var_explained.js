var a=20;
console.log(a);//function scope and global scope with var
function printHello(){
    console.log("Hello World");
    var a=30;//local scope
    console.log("variable value:", a);
    //loop statement with var
    if(true){
        var a=40;//var
        console.log(a);        
    }
}
printHello();
console.log("variable value outside function:", a);
        