 function buildEndPoint(base:string,path:string):string{
    return base+path;
 }
 function isSussessCode(code:number):boolean{
    return (code >=200 && code<=300);

 }
 function logTestStep(step:string):void{
    console.log("[step] " + step)
 }

 console.log(buildEndPoint("https://api.com","/users"));
 console.log("200 is success",isSussessCode(400));
console.log("400 is success",isSussessCode(401));
logTestStep("navigate to login page");

 