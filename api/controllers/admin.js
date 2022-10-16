// import admin schema from model
const Admin = require(`../models/admin`);

// controller to save admin to database/mongodb
const saveAdmin = async (req,res,next) => {

  try {

    const { name, email, password, contactNumber } = req.body;

    const admin = new Admin({
      name:name,
      email:email,
      password:password,
      contactNumber:contactNumber
    });

    const result = await admin.save();

    if (result) {

      return res.status(201).json({

        hassError:false,
        message:`Requested api succefull`,
        data:result.name

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
  saveAdmin
}