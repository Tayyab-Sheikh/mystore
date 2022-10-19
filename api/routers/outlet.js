const express = require(`express`);
const {saveOutletdata }= require(`../controllers/outlet`);
const outletRouter = express.Router();

outletRouter.post(`/`,saveOutletdata);

module.exports= outletRouter;

