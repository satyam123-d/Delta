// Array Destructing

// let names = ["tonny", "bruce", "petter", "steve"];

// let winner = names[0];
// let runnerUp =names[1];
// let secondRunnerUp = names[2];

// let [winner, runnerUp, secondRunnerUp] = names;

// let [winner, runnerUp, ...secondRunnerUp] = names;

// console.log(winner);
// console.log(runnerUp);
// console.log(secondRunnerUp);

//Object Destructing

const student = {
    naem:"Satyam",
    age: 23,
    class: "MCA",
    subject: ["Java", "Android", "C++", "Python"],
    username: "karan@123",
    password: "abcde",
};

let {username : user, password: secret, city: palce="Mumbai"} = student;

// console.log(username);
// console.log(password);
console.log(user);
console.log(secret);
console.log(palce);
