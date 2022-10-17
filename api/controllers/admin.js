//import admin schema from model
const Admin = require(`../models/admin`);

//controller to save admin to database/mongodb
//asyn for api call
const saveAdmin = async (req,res,next) => {
    try{
        
    const {name,email,password,ContactNumber} = req.body; 
    const admin = new Admin({
        name:name,
        email:email,
        password:password,
        ContactNumber:ContactNumber
    });

    const result = await admin.save();

    if(result){
        return res.status(201).json({
            hasError:false,
            message:`Requested api successful`,
            data:result.name
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
        saveAdmin
    }
