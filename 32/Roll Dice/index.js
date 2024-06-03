const express = require('express')
const app = express();
const path = require("path")

const port = 3000;

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"))

let diceVal = () => {
    return Math.floor(Math.random()*6)+1
};

app.get("/", (req, res) => {
    res.render("home.ejs",{num: diceVal()});
});

app.get("/rolldice", (req, res) => {
    res.json({num: diceVal()})
})

app.listen(port,() => {
    console.log(`Server Running on port ${port}`)
})