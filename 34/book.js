const mongoose = require('mongoose');

main()
.then(() => {`Connection Succesful!`})
.catch(() => {`Error Occured!`})

async function main(){
    await mongoose.connect('mongodb://127.0.01:27017/books')
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 20
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: [1,"Price is too low"]
    },
    discount: {
        type: Number,
        default: 0,
        max: 100
    },
    category: {
        type:String,
        enum: ["fiction", "non fiction"] 
        // enum is schematype we canot select schema defition other than that
    }, 
    genre:{
        type: [String]
    }
})

let Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
    title: "Let Us C",
    author: "Satyam",
    price: 599,
    category: "fiction",
    genre:['fiction', 'comic']
})

book1.save()
// .then((res) => {console.log(res)})
// .catch((err) => {console.log(err)})

Book.findByIdAndUpdate("665c64fc58840168217c9110", {price: -500}, {runValidators: true})
.then((res) => {console.log(res)})
.catch((err) => {console.log(err.errors.price.properties.message)})