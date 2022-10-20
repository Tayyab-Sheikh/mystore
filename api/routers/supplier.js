const express = require(`express`);
const { saveSupplierData } = require(`../controllers/supplier`);

const supplierRouter = express.Router();

supplierRouter.post(`/`, saveSupplierData);

module.exports = supplierRouter;