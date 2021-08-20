const mongoose =require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: {
        type: String,
        reqiured: [true, "Name is required"]
    },
    email:{
        type: String,
        required: [true, "email is required"]
    },
    subject:{
        type: String,
        reqiured: [true, "Enter your subject"]
    },
    message:{
        type: String,
        
    }

})

const UserModel = mongoose.model("mail", UserSchema)

module.exports = UserModel