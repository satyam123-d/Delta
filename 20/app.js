const student = {
    name: "Satyam",
    marks: 95,
    prop: this,
    getName: function(){
        console.log(this);
        console.log(this.name);
    },

    getMarks: () => {
        console.log(this);
        console.log(this.marks);
    },

    getInfo1: function () {
        setTimeout(() => {
            console.log(this);
        }, 2000);
    },

    getInfo2: function () {
        setTimeout(function () {
            console.log(this);
        }, 2000);
    },
}

student.getName();
student.getMarks();