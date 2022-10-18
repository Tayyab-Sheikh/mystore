const mongoose = require(`mongoose`);

const adminSchema = new mongoose.Schema({

  _id:{
    type:mongoose.Types.ObjectId
  },
  name:{
    type:String,
    uppercase:true,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  contactNumber:{
    type:Number,
    required:true
  },
  systemRole:{
    type:String,
    uppercase:true,
    default:`ADMIN`
  }

},{
  _id:true
});

module.exports = mongoose.model(`admins`,adminSchema);