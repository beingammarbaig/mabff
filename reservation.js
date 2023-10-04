const mongoose = require("mongoose")
const { Schema } = mongoose;
const UserSchema = new Schema({
    date:{
        type: String,
        required: true
    },
    time:{
        type: String,
        required: true
    },
    partySize:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Reservation',UserSchema)