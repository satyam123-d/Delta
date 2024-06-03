let nums = [10, 20, 30, 40];
console.log(...nums)

let str = "Satyam Mishra";
console.log(...str)

let data = {
    email : "satyam02367@gmail.com",
    password: "Satyam"
};
const dataCopy = {
    ...data,
    id: "123",
    ...str,
    ...nums 
}
console.log(data);
console.log(dataCopy);

function sum(...nums){
    return nums.reduce((add, el) => add+el);
}

console.log(sum(10, 20, 30, 40, 50));