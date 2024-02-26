const mongoose = require("mongoose"); 

const userSchema = mongoose.Schema({
    
    name: String,
    email: String,
    username: String,
    password: String,
    githubLink: String,
    telegramUsername: String
    
})
module.exports = mongoose.model("User", userSchema);
