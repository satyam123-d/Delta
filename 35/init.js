const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then((res) => {
    console.log("Connection Succesful");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
  {
    from: "Neha",
    to: "Priya",
    msg: "Hellow! I am Neha",
    created_at: new Date(),
  },
  {
    from: "Rohan",
    to: "Shyam",
    msg: "Send me JS Notes",
    created_at: new Date(),
  },
  {
    from: "Satyam",
    to: "Malik",
    msg: "Do you have JS Project",
    created_at: new Date(),
  },
  {
    from: "Satyam",
    to: "Saurabh",
    msg: "Do you have Python Project",
    created_at: new Date(),
  }
];

Chat.insertMany(allChats)
