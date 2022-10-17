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
        type:String,
        required:true
    },
    ContactNumber:{
        type:String,
        required:true
    },
    
    systemRole:{
        type:String,
        uppercase:true,
        default:`ADMIN`
    }

});

module.exports = mongoose.model(`admins`,adminSchema);