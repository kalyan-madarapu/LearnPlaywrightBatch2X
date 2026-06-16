let apiCall= new promise(function(resolve,reject){
resolve({
    status:200,body:"user data"
})

})
apicall.then(function(response){//resolved
    console.log(response.status);
}).catch(function(reject){
    consle.log(response.status)
})
//.then runs only when the promise resolves sucessfully
