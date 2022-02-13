const express = require("express");
const Exceptions = require("../utils/exceptions");
const ErrorHandler = require("../utils/error-handler");
const MiddleWare = require("../middleware/auth");
const Features = require("../models/features-model");

const router = new express.Router();


router.get("/features", MiddleWare.auth, async (req, res) => {
  try {
    data=await Features.getAllFeatures()
    res.send({data})
  } catch (e) {
    ErrorHandler.handleError(e, res);
  }
});

module.exports = router;
