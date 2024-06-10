const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const methodOverride = require('method-override');
const Note = require('./models/notes');

const app = express();

app.set("view engine", "ejs")
app.set("views",path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"))

main()
    .then(() => { console.log('Connection Successful'); })
    .catch(err => { console.log(err); });

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/rest');
}

app.get("/", (req, res) => {
    res.render("index.ejs")
});

app.post("/notes", async(req, res) => {
    try{
        let {from, heading, msg} = req.body;
        let newNote = new Note({
            from: from,
            heading: heading,
            msg: msg,
            created_at: new Date()
        });
        await newNote.save();
        console.log(`Notes is saved!`)
        res.redirect("/notes");
    }catch(err){
        console.log(`Error creating notes: `, err.message);
        res.status(500).send(`Internal Server Error`);
    }
});

app.get("/notes", async(req, res) => {
    try{
        let notes = await Note.find();
        console.log(notes);
        res.render("notes.ejs", {notes})
    }
    catch(err){
        console.error("Error fetching notes : ", err.message);
        res.status(500).send(`Internal Server Error`);
    }
});

app.get("/notes/:id/edits", async (req, res) => {
    try {
        let { id } = req.params;
        let note = await Note.findById(id);
        if (!note) {
            throw new Error("notes not found");
        }
        res.render("edit.ejs", { note });
    } catch (err) {
        console.error("Error fetching notes:", err.message);
        res.status(500).send('Internal Server Error');
    }
});

// Update Route
app.put("/notes/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { heading, msg } = req.body;
        if (!msg) {
            throw new Error("Message content is required");
        }
        const updatedNote = await Note.findByIdAndUpdate(
            id,
            { heading, msg },
            { runValidators: true, new: true }
        );
        console.log(updatedNote);
        res.redirect("/notes");
    } catch (err) {
        console.error("Error updating note:", err.message);
        res.status(500).send('Internal Server Error');
    }
});

// Delete Route

app.delete("/notes/:id", async (req, res) => {
    try {
        let { id } = req.params;
        let deletedchat = await Note.findByIdAndDelete(id);
        console.log(deletedchat)
        res.redirect("/notes")
    } catch (err) {
        console.error("Error fetching Note:", err.message);
        res.status(500).send('Internal Server Error');
    }
});

app.listen( 8080, ()=> {
    console.log(`Server is running at 8080`);
})