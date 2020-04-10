function testone(){
    return "I am result";
}

console.log("I am good");
let promise = new Promise(function(resolve,rejcct){
    resolve(testone());
});
let promise2 = new Promise(function(resolve,rejcct){
    rejcct('I am error');
});

promise.then(function(result){
    console.log(result);
}).catch(function(err){
    console.log(err);
});

Promise.all([promise,promise2]).then(result=>{
    console.log(result);//array of results
}).catch(err=>{
    console.log(err);
})

