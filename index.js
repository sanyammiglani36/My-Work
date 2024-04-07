// let promise = new promise(function(resolve,reject){
//     console.log("I am inside a promise");
//     resolve(1998);
// })

// console.log("First");

// let meraPromise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("I am inside a promise1")
//     },5000);
//     //resolve(1998);
// });

// let promise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("I am inside the promise2")
//     },3000);
//     //reject(new Error("Error is occuring inside"));
// })
// console.log("First");

// let promise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("I am isnide a promise");
//     },2000);
//     resolve(2233);
// });

// promise.then((value) => {console.log(value)});


//multiple promises
let firstPromise = new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("setTimeout1 started");
    },2000);
    resolve(true);
});

let output = firstPromise.then(() => {
    let secondPromise = new Promise(function(resolve,reject){
        setTimeout(() => {
            console.log("SetTimeout2 started");
        });
        resolve("secondPromise is resolved");
    });
    return secondPromise;
});

output.then((value) => console.log(value));