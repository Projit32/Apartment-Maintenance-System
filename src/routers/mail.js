const express = require('express')
const Mailer = require('../mails/mailer') 
const ErrorHandler = require('../utils/error-handler')
const LedgerData = require('../models/ledger-model')
const UserData = require('../models/user-model')
const MiddleWare = require('../middleware/auth')

const router = new express.Router()

router.post("/mails/testMail", MiddleWare.auth, async(req, res)=>{
    try{
        const expData = await LedgerData.getMonthlyLedgerData(req.body.month,req.body.year)
        const userData = await UserData.getUserByFlat(req.body.flatNum)
        const mailData= {
            emails: userData.EMAILS,
            name: userData.OWNER_NAME,
            month: req.body.month,
            year: req.body.year,
            generated: new Date(),
            expData
        }
        Mailer.sendMail(mailData,res)
    }
    catch(e) {ErrorHandler.handleError(e,res)}
})

module.exports =router