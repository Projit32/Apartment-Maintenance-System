const express = require("express");
const Exceptions = require("../utils/exceptions");
const ErrorHandler = require("../utils/error-handler");
const MiddleWare = require("../middleware/auth");
const Moms = require("../models/mom-model");

const router = new express.Router();

const checkQueryParam=(req)=>{
  if(!req.query.startDate || !req.query.endDate)
  {
      throw Exceptions.QueryException('PARAMS_MISSING','Please provie the start and end dates.')
  }
}

router.get("/moms", MiddleWare.auth, async (req, res) => {
  try {
    checkQueryParam(req)
    const start = new Date(req.query.startDate)
    const end =  new Date(req.query.endDate)
    if(start>end){throw Exceptions.ValidationException("DATE_INV", "Start Date cannot be later than End date!")}
    data=await Moms.findByStartandEndDates(start,end)
    res.send({data})
  } catch (e) {
    ErrorHandler.handleError(e, res);
  }
});

module.exports = router;
