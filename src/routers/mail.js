const express = require('express')
const Mailer = require('../mails/mailer') 
const ErrorHandler = require('../utils/error-handler')
const LedgerData = require('../models/ledger-model')
const UserData = require('../models/user-model')
const MiddleWare = require('../middleware/auth')
const UserInfoService = require('../service/user-info')

const router = new express.Router()

router.post("/mails/SendEstimatesMail", MiddleWare.auth, async(req, res)=>{
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
        Mailer.generateMonthlyExpenseMail(mailData,res)
    }
    catch(e) {ErrorHandler.handleError(e,res)}
})

router.get("/mails/sendPersonalDetailsMail", MiddleWare.auth, async(req, res)=>{
    try{
        data = await UserInfoService.generateUserInfoMailData(req.user)
        Mailer.generatePersonalDataMail(data,res)
    }
    catch(e) {ErrorHandler.handleError(e,res)}
})

module.exports =router