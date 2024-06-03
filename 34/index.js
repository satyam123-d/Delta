const mongoose = require('mongoose');

main()
.then(()=>{
    console.log("connection succesful");
})
.catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.01:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email:String,
    age:Number
})

const empSchema = new mongoose.Schema({
    name: String,
    email: String,
    id: Number
});

const User = mongoose.model("User", userSchema);

const Emplpyee = mongoose.model("Employee", empSchema);

const user1 = new User({name:"Satyam", email:"satyam@gmail.com", age:23});

user1.save();

const user2 = new User({name:"Mishra", email:"mishra@gmail.com", age:23});

// user2.save()
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })

// User.find({})
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })

User.findOne({age:{$gte:23}})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})

User.findById("665b700473fef1c465fb17ac")
.then((res) => {
    console.log(res);
})
.catch((err) => console.log(err))

User.findOneAndUpdate({name:"Satyam"}, {age:24}, {new: true}).then((res) => {console.log(res)}).catch((err) => {console.log(err)});