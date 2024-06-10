const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const Chat = require('./models/chat.js');
const methodOverride = require('method-override');

const app = express();
const port = 8080;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
 
main()
    .then(() => { console.log('Connection Successful'); })
    .catch(err => { console.log(err); });

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// Index Route
app.get("/chats", async (req, res) => {
    try {
        let chats = await Chat.find();
        console.log(chats);
        res.render("index.ejs", { chats });
    } catch (err) {
        console.error("Error fetching chats:", err.message);
        res.status(500).send('Internal Server Error');
    }
});

// New Chat
app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
});

// Create Route
app.post("/chats", async (req, res) => {
    try {
        let { from, to, msg } = req.body;
        let newChat = new Chat({
            from: from,
            to: to,
            msg: msg,
            created_at: new Date()
        });
        await newChat.save();
        console.log("Chat was saved");
        res.redirect("/chats");
    } catch (err) {
        console.error("Error creating chat:", err.message);
        res.status(500).send('Internal Server Error');
    }
});

// Edit Route
app.get("/chats/:id/edits", async (req, res) => {
    try {
        let { id } = req.params;
        let chat = await Chat.findById(id);
        if (!chat) {
            throw new Error("Chat not found");
        }
        res.render("edit.ejs", { chat });
    } catch (err) {
        console.error("Error fetching chat:", err.message);
        res.status(500).send('Internal Server Error');
    }
});

// Update Route
app.put("/chats/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { msg } = req.body;
        if (!msg) {
            throw new Error("Message content is required");
        }
        const updatedChat = await Chat.findByIdAndUpdate(
            id,
            { msg: msg },
            { runValidators: true, new: true }
        );
        console.log(updatedChat);
        res.redirect("/chats");
    } catch (err) {
        console.error("Error updating chat:", err.message);
        res.status(500).send('Internal Server Error');
    }
});

// Delete Route

app.delete("/chats/:id", async (req, res) => {
    try {
        let { id } = req.params;
        let deletedchat = await Chat.findByIdAndDelete(id);
        console.log(deletedchat)
        res.redirect("/chats")
    } catch (err) {
        console.error("Error fetching chat:", err.message);
        res.status(500).send('Internal Server Error');
    }
});
// Home Route
app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
