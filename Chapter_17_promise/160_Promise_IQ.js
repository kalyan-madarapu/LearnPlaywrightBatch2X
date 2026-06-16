//Ex:1
let p=new Promise(function(resolve,reject){
resolve(42)
});
p.then(function(value){
    console.log("Answer:",value)
})
//Ex:2
let p2=new Promise(function(resolve,reject){
    reject("some thing got broke");

});p2.catch(function(error){
    console.log("caught:",  error)
});
//Ex:3 two thens in this example
let p3=Promise.resolve(5);
p3.then(function(val){
    return val * 10;
    
}).then(function(val){
    console.log("result:", val)
});


//Ex4:many then for resolve condition
Promise.resolve(1)
.then(function(val2){
    console.log(val2);
    return val2+1;
}).then(function(val2){
    console.log(val2);
    return val2+1;
}).then(function(val2){
    console.log(val2);
    return val2+1;
});
//Ex5:then and throw condtions
Promise.resolve("start")
.then(function(val){
    console.log(val);
    throw new Error("code broken at step-2");
}).then(function(){
    console.log("this will not run ");
}).catch(function(err){
    console.log("caught:", err.message);
});

//Ex:6 then catch finally flow
Promise.reject("test Failed")
.then(function(data){
    console.log("Data",data);

}).catch(function(err){
    console.log("Error:", err)
}).finally(function(){
    console.log("clean up is  done !!")
});
//Ex7 resolve and reject combination
Promise.resolve("Quick win").then(function(msg){
    console.log(msg);

});
Promise.reject("Quick loss").catch(function(msg){
    console.log(msg)
});

//ex:8 promie.all will be used when all the condition are Psss
let t1=Promise.resolve("Login :PASS");
let t2=Promise.resolve("search:PASS");
let t3=Promise.resolve("Logout:PASS")
Promise.all([t1,t2,t3]).then(function(results){
    console.log(results)
});

//ex9:allSetteled , pass or fall it will give the results
Promise.allSettled([
    Promise.resolve("API200"),
    Promise.reject("API 500"),
    Promise.resolve("API 201")

]).then(function(results){
    results.forEach(function(r){
       // let val=r.status === "fulfilled" ? r.value: r.reason;
        //console.log(r.status +"->" +val)
        console.log(r)
        });
});