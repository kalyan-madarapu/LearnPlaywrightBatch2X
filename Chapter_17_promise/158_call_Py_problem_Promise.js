function goToLogin(){
    return new Promise(function(resolve){
        resolve("login page loaded")        
})
}
function clickLogin(){
    return new Promise(function (resolve){
        resolve("Logged in sucessfully");
    })
}

function enterCredentials(){
    return new Promise(function(resolve)){
        resolve("credintionals entered");
    }
}
openBrowser().then (function (mdg){
    console.log("step1:-open Browser ")
    return goToLogin()

}).then(function(msg){ 
    console.log("step1",msg )
    return goToLogin();
}).then(function(msg){
    console.log("step2",msg)
    return enterCredentials();
}).catch(function(error){
    console.log("error",error)
}).finally(function(){
    console.log("done the execution")
})
 