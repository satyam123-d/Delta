const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    from:{
        type: String,
        required: true
    },
    heading:{
        type: String,
        required: true
    },
    msg:{
        type: String,
        maxLength: 1000
    },
    created_at:{
        type: Date,
        required: true
    }
})

const Note = mongoose.model("Note", noteSchema)

module.exports = Note;