const mongoose = require(`mongoose`);

const outletSchema = new mongoose.Schema({

  _id:{
    type:mongoose.Types.ObjectId
  },
  admin:{
    type:mongoose.Types.ObjectId
  },
  outletName: {
    type:String,
    uppercase:true,
    required:true
  },
  location:{
    type:String,
    uppercase:true,
    required:true
  },
  city:{
    type:String,
    uppercase:true,
    required:true
  },
  outletContactNumber:{
    type:Number,
    required:true
  },
  outletEmail:{
    type:String,
    require:true
  }

});

module.exports = mongoose.model(`outlets`,outletSchema);
