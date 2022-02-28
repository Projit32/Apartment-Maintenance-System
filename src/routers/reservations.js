const express = require("express");
const Exceptions = require("../utils/exceptions");
const ErrorHandler = require("../utils/error-handler");
const MiddleWare = require("../middleware/auth");
const Reservations = require("../models/reservation-model");

const router = new express.Router();


router.get("/reservation", MiddleWare.auth, async (req, res) => {
  try {
    
  } catch (e) {
    ErrorHandler.handleError(e, res);
  }
});

module.exports = router;
