const mongoose = require("mongoose");

let SignupSchema = mongoose.Schema({
    email:{
        type: String,
        unique: true
    },
    password:{
        type:String
    }
})
module.exports = mongoose.model("Signup", SignupSchema)