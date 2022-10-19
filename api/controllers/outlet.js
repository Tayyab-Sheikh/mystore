//import admin schema from model
const Outlet = require(`../models/outlet`);
const mongoose = require(`mongoose`);

//controller to save admin to database/mongodb
//asyn for api call
const saveOutletdata = async (req,res,next) => {
    try{
        
    const {admin,outletName,location,city,outletContactNumber,outletEmail} = req.body; 
    const outlet = new Outlet({
        _id:mongoose.Types.ObjectId(),
        admin:mongoose.Types.ObjectId(admin),
        outletName:outletName,
        location:location,
        city:city,
        outletContactNumber:outletContactNumber,
        outletEmail:outletEmail
        
    });

    const result = await admin.save();

    if(result){
        return res.status(201).json({
            hasError:false,
            message:`Requested api successful`,
            data:result.outletName
        });
    }
    } catch(error){
        console.log(error);
        return res.status(500).json({
            hasError:true,
            message:`Something went wrong. Please try again`,
            data:error
        });
    }
}

    module.exports={
        saveOutletdata
    }
