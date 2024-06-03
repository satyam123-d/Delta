// Question 1

const square = (n) => n*n;
console.log(square(4)); 

// question 2

const hellow = setInterval(() => {
    console.log("Hellow World");
}, 2000);

setTimeout(() => 
{
    clearInterval(hellow);
}, 10000);