const mongoose = require(`mongoose`);

const supplierSchema = mongoose.Schema({

  _id: {
    type: mongoose.Types.ObjectId
  },
  admin: {
    type: mongoose.Types.ObjectId
  },
  supplierName: {
    type: String,
    uppercase: true,
    required: true
  },
  brandName: {
    type: String,
    uppercase: true,
    required: true
  },
  supplierContactNumber: {
    type:String,
    required: true
  },

});

module.exports = mongoose.model(`suppliers`, supplierSchema);