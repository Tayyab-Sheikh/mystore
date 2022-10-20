// import admin schema from model
const Supplier = require(`../models/supplier`);
const mongoose = require(`mongoose`);

// controller to save outetData to database/mongodb
const saveSupplierData = async (req,res,next) => {

  try {

    console.log(req.body);

    const {admin,supplierName,brandName, supplierContactNumber } = req.body;

    const supplier = new Supplier({

      _id:mongoose.Types.ObjectId(),
      admin:mongoose.Types.ObjectId(admin),
      supplierName:supplierName,
      brandName:brandName,
      supplierContactNumber:supplierContactNumber

    });

    const result = await supplier.save();

    if (result) {

      return res.status(201).json({

        hassError:false,
        message:`Requested api successfull`,
        data:result.supplierName

      });

    }
  
  } catch (error) {
  
    console.log(error);
    return res.status(500).json({

      hassError:true,
      message:`Something went wrong`,
      data:error

    });

  }


}

module.exports = {
  saveSupplierData
}
