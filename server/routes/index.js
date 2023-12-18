const express = require("express");
const router = express.Router();
const administrator = require("./administrator");
const customer = require("./customer");
const { authentication } = require("../middlewares/auth");
const errorHandler = require("../middlewares/errorHandler");

router.use("/administrator", administrator);
router.use("/customer", customer)
// router.use(authentication);
// router.use("/user/profile", profile)
router.use(errorHandler);
module.exports = router;
