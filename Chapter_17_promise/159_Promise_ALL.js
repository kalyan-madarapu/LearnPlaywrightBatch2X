let checkAuth=Promise.resole("Auth OK");
let checkDBconn=Promise.resolve("DB check OK")
let checkCache=Prome.resolve("cache ok")
promese.all([checkAuth,checkCache,checkDBconn]).then(function(result){
console.log("All the checks are fine")

})
promise.all([
    promise.resolve("ok"),
    promise.resolve("DB DOWN"),
    promse.resolve("Ok")

]).then(function(r){
    console.log(r)
}).catch(function(error){
    console.log("Failed",error)
})