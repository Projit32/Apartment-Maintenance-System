const express = require('express')
const Funds = require('../models/emergency-funds-model')
const LedgerData = require('../models/ledger-model') 
const ErrorHandler = require('../utils/error-handler')
const MiddleWare = require('../middleware/auth')

const router = new express.Router()

router.get("/stats/emergencyFunds", MiddleWare.auth, async(req, res)=>{
    try{
        const data = await Funds.getData()
        res.send({data})
    }
    catch(e) {ErrorHandler.handleError(e,res)}
})

router.get("/stats/electricityTrends/:year", MiddleWare.auth, async(req, res)=>{
    try{
        const data = await LedgerData.getElectricityTrendsData(req.params.year)
        res.send({data})
    }
    catch(e){ErrorHandler.handleError(e,res)}
})

module.exports =router