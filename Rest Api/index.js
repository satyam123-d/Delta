const express = require('express')
const data = require(`./Mock_Data.json`)
const path = require('path')

const app = express()

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.get("/", (req, res) => {
    res.send(`${new Date()}`)
})

app.get("/api/data", (req, res) => {
    res.json(data)
})

app.get("/data", (req, res) => {

    res.render("index.ejs", {data: data})
})

app.get("/api/data/:id", (req, res) => {
    const id = Number(req.params.id)
    const user = data.find((user) => user.id === id);
    res.json(user);
});

app.get("/data/:id", (req, res) => {
    const id = Number(req.params.id)
    res.render("second.ejs", {id: id, data: data})
});

app.listen(8080, () => {
    console.log(`Server is rinning at port 8080`)
})