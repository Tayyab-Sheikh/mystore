const mongoose = require(`mongoose`);

const adminSchema = new mongoose.Schema({
    _id:{
        type: mongoose.Types.ObjectId
    },
    name:{
        type:String,
        uppercase:true
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String
    }
});