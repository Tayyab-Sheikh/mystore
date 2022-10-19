const express = require(`express`);
const { saveOutletData } = require(`../controllers/outlet`);

const outletRouter = express.Router();

outletRouter.post(`/`, saveOutletData);

module.exports = outletRouter;
