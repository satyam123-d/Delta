const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const Chat =  require('./models/chat.js')

const app = express()
const port = 8080

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs");

main()
.then(res => {console.log('Connection Succesful')})
.catch(err => {console.log(err)});

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let chat1 = new Chat({
    from: "Neha",
    to: "Priya",
    msg: "Hellow! I am Neha",
    created_at: new Date()
})

chat1.save()
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})

app.get("/", (req, res) => {
    res.send(`Root is working`);
})
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});