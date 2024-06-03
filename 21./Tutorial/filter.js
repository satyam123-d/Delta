// filter

let nums = [2, 4, 1, 5, 6,2, 7, 8, 9]

// let even = nums.filter((el) => {
//     return el%2==0;
// })

// console.log(even);

// Every Method

// let isEven = nums.every((el) =>{
//     return el%2==0;
// })

// console.log(isEven);

// // Some Method

// let containEven = nums.some((el) =>{
//     return el%2 == 0;
// })

// console.log(containEven);

// Reduce function

let reducer =nums.reduce((accu, el) => accu+el);

console.log(reducer);