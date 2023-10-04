const mongoose = require("mongoose")
const { Schema } = mongoose;
const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    msg:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Contact',UserSchema)