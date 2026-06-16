console.log("Test 1: started");//sync

setTimeout(function () {
    console.log("Test 2: API response received");//async
}, 2000);

console.log("Test 3: moving to next test");//sync

// **Why does Test 3 print before Test 2?** due to 2sec time 
//Test 1: started
//Test 3: moving to next test
//Test 2: API response received

