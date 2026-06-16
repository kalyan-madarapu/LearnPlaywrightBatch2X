let capiCall=new Promise(function(reslove,reject){

    reject("500 error")
})
apicall.then (function(data){
    console.log("succrss or resolve")
}).catch(function(error){
    console.log(error)
});
//.catch runs only when the promise is rejected
//.then will be skipped