// const promise = new Promise((resolve, reject) => {
//     let operation = true;
//     if(operation) {
//         resolve("Success");
//     }else {
//         reject("Error");
//     }
// });

// then (result-state: fulfilled), catch (result-state: rejected)

// promise.then((successMessage) =>{
//     console.log(successMessage);
// })
// .catch((errorMessage) => {
//     console.log(successMessage);
// });

// callback hell


// const promise2 = new Promise((resolve, reject) =>{
//     if(Math.random() < 0.5) {
//         resolve("Success");
//     }else {
//         reject("Error");
//     }
// });

// promise2
// .then((message) => {
//     console.log(message);
// })
// .catch((err) => {
//     console.log(err);
// })
// .finally(() => {
//     console.log("Finally");
// });


/////////////////////////////////////////////////////

// function valuePromise(argument) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(typeof argument === "number"){
//                 resolve(argument);
//             }else {
//                 reject("Not a number");
//             }
//         }, 2000);
//     });
// }

// valuePromise(1).then((message) => {
//     console.log(message);
// })
// .catch((err) => {
//     console.log(err);
// })

//////////////////////////////////////////////////////

// Promise.all([promise, promise2]) => [result, result2]

// const prom1 = new Promise((res, rej) => {
//     setTimeout(() => res("first promise"), 1000);
// });
// const prom2 = new Promise((res, rej) => {
//     setTimeout(() => res("second promise"), 2000);
// });
// const prom3 = new Promise((res, rej) => {
//     setTimeout(() => res("third promise"), 3000);
// });

// Promise.all([prom1, prom2, prom3]).then((data) => {
//     console.log(data);
// })
// .catch((err) => {
//     console.log(err);
// });

//////////////////////////////////////////////////////

// Promise.any([promise, promise2]) =>

// Promise.any([prom1,prom2, prom3])
// .then((data) => {
//     console.log(data);
// })
// .catch((err) => {
//     console.log(err);
// });

//////////////////////////////////////////////////////

//ECMAScript 2021
// instanceof

// Promise.any([prom1,prom2, prom3])
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//     if(error instanceof AggregateError){
//         for(let err of console.error.errors){
//             console.log(err)
//         }
        
//     }
// });

//////////////////////////////////////////////////////

//Promise.race([promise, promise2])

// const prom1 = new Promise((res, rej) => {
//     setTimeout(() => res("first promise"), 1000);
// });
// const prom2 = new Promise((res, rej) => {
//     setTimeout(() => res("second promise"), 200);
// });
// const prom3 = new Promise((res, rej) => {
//     setTimeout(() => res("third promise"), 3000);
// });

// Promise.race([prom1,prom2, prom3])
// .then((data) => console.log(data))
// .catch((error) => console.log(error));

//////////////////////////////////////////////////////

// const prom1 = new Promise((res, rej) => {
//     setTimeout(() => res("first result"), 2000);

// })
// const prom2 = new Promise((res, rej) => {
//     setTimeout(() => res("second result"), 5000);
// })

// Promise.all([prom1, prom2])
// .then((date) => console.log(date))
// .catch((err) => console.log(err))
// .finally(() => console.log("Something"));

// Promise.any([prom1, prom2])
// .then((message) => console.log(message))
// .catch((error) => console.error(error));

//////////////////////////////////////////////////////

// Promise.allSettled([promise, promise2])

// const promise1 = new Promise((res, rej) => {
//     setTimeout(() => res("Promise 1 Successfully finished"), 1000);
// });

// const promise2 = new Promise((res, rej) => {
//     setTimeout(rej, 3000, "Promise 2 Successfully failed");
// });

// Promise.allSettled([promise1, promise2])
// .then((results) => console.log(results)
// );

// Promise.race([promise1,promise2])
// .then(value => console.log(value))
// .catch((error) => console.log(error));

//////////////////////////////////////////////////////

// const promise1 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 200, "first")
// );
// const promise2 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 500, "second")
// );
// const promise3 = new Promise((resolve, reject) =>
//   setTimeout(reject, 300, "third")
// );

// Promise.all([promise1, promise2, promise3])
//   .then((values) => console.log(values))
//   .catch((error) => console.log(error));

//////////////////////////////////////////////////////

// const promise1 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 2000, "first")
// );
// const promise2 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 500, "second")
// );
// const promise3 = new Promise((resolve, reject) =>
//   setTimeout(reject, 300, "third")
// );

// Promise.any([promise1, promise2, promise3])
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error));

//////////////////////////////////////////////////////

// const promise1 = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve("success");
//   });
//   promise1.then(() => {
//     console.log(3);
//   });
//   console.log(4);

//////////////////////////////////////////////////////



//////////////////////////////////////////////////////