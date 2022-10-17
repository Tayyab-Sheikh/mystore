const mongoose = require(`mongoose`);

const productSchema = new mongoose.Schema({
    _id:{
        type: mongoose.Types.ObjectId
    },

    supplierId:{
        type: mongoose.Types.ObjectId
    },
    outletId:{
        type: mongoose.Types.ObjectId
    },
    name:{
        type:String,
        uppercase:true
    },
    type:{
        type:String,
        unique:true
    },
    quantity:{
        type:String,
        required:true
    },
    price:{
        type:integer,
        required:true
    },
    
    serialnumber:{
        type:String,
        uppercase:true,
    },
    manufacturedata:{
        type:Date,
    },
    expirydate:{
        type:Date,
    }

});

module.exports = mongoose.model(`products`,productSchema);