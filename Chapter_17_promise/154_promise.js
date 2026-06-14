let order= new Promise(function(resolve, reject){
    let foodready=true;
    if( foodready){
        resove("Pizza is readay,food is delivered")
    }
    else {
        reject("orer is canceled due to rain")
    }

})
console.log(order)
