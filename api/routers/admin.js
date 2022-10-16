const express = require(`express`);
const { saveAdmin } = require(`../controllers/admin`);

const adminRouter = express.Router();

adminRouter.post(`/`, saveAdmin);

module.exports = adminRouter;