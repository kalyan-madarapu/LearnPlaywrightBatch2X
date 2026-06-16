promise.allSettled([
    promise.resolve("Test A Passed"),
    promise.reject("Test B Failed"),
    promise.resolve("Test C Passed")

]).then(function(results){
    results.forEach(function(r,i){
        
    })
}
)