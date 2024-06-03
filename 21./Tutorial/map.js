let student = [
    {
        name : "Satyam",
        marks: 95
    },

    {
        name: "Ram",
        marks: 83
    },

    {
        name: "mohan",
        marks:98
    }
]

let gpa = student.map((el) =>{
    // console.log(`${el.name} is obtained ${el.marks/10} gpa`);
    return el.marks;
})

console.log(gpa);