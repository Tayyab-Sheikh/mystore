// import admin schema from model
const Outlet = require(`../models/outlet`);
const mongoose = require(`mongoose`);

// controller to save outetData to database/mongodb
const saveOutletData = async (req,res,next) => {

  try {

    console.log(req.body);

    const { admin, outletName, location, city, outletContactNumber, outletEmail } = req.body;

    const outlet = new Outlet({

      _id:mongoose.Types.ObjectId(),
      admin:mongoose.Types.ObjectId(admin),
      outletName:outletName,
      location:location,
      city:city,
      outletContactNumber:outletContactNumber,
      outletEmail:outletEmail

    });

    const result = await outlet.save();

    if (result) {

      return res.status(201).json({

        hassError:false,
        message:`Requested api succefull`,
        data:result.outletName

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
  saveOutletData
}