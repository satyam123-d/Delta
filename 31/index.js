const express = require('express')
const app = express()

const port = 8080;

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})

// app.use((req, res) => {
//     console.log(`request recived`);
//     // res.send("Welcome to our Wev Dev journey!")
//     // res.send({name: "Satyam", Course : "MCA", College: "Quantu University"});
//     res.send("<h1>Carrer :-</h1> <ul><li>Web Dev</li><li>Data Science</li></ul>")
// })

// Routing : It is a process of selecting a path for traffic in a network or between or across multiple network

app.get("/", (req, res) => {
    res.send("Welcome to our Satta Bazar")
})

app.get("/:username/:id", (req, res) => {
    let {username,id} = req.params;
    res.send(`<h1>Welcome, ${username}!</h1><p>Your id is : ${id}</p>`)
})

app.get("/home", (req, res) => {
    res.send("This is home page")
})

app.get("/about", (req, res) => {
    res.send("This is about page")
})

app.get("/carrer", (req, res) => {
    res.send("This is carrer page")
})

app.get("/contact", (req, res) => {
    res.send("This is contact page")
})

app.get("/search", (req, res) => {
    let {q} = req.query;

    if (!q) {
        res.send(`<h1>Query nothing exist</h1>`)
    }
    res.send(`<h1>Search result for querry : ${q}</h1>`)
})

app.get("*", (req, res) => {
    res.send("This doesn't exist")
})
