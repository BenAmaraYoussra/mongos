const mongoose = require('mongoose')

const schema = mongoose.Schema

const ContactSchema= new schema({
    name:{
        type:String,
        required:true,
    
    },
    email:{
        type:String,
        required: true,
        unique: true,
    },
    phone:{
        type:Number
    }

})
module.exprorts= Contact = mongoose.model=('contact', ContactSchema)