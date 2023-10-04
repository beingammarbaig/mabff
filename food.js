const mongoose = require("mongoose")
const { Schema } = mongoose;
const UserSchema = new Schema({
    category:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    url:{
        type: String,
        required: true
    },
    desc:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('menu',UserSchema)