const express = require('express')
const MonthlyData = require('../models/monthly-model')
const Exceptions = require('../utils/exceptions')
const ErrorHandler = require('../utils/error-handler')
const MiddleWare = require('../middleware/auth')

const router = new express.Router()

const months =["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"]

const checkQueryParam=(req)=>{
    if(!req.query.monthNumber && !req.query.year)
    {
        throw Exceptions.QueryException('PARAMS_MISSING','Please provie the month number and year in parameters')
    }
    else if (req.query.monthNumber && !req.query.year)
    {
        throw Exceptions.QueryException('MONTH_MISSING','Please provie the month number')
    }
    else if(!req.query.monthNumber && req.query.year)
    {
        throw Exceptions.QueryException('YEAR_MISSING','Please provie the year')
    }
}

router.get('/months/flatwiseData', MiddleWare.auth, async (req, res)=>{

    monthFilter={}
    try{
        checkQueryParam(req)
    
        monthFilter.MONTH=months[parseInt(req.query.monthNumber)-1]
        monthFilter.YEAR=parseInt(req.query.year)

        const data = (await MonthlyData.getDataforMonth(monthFilter)).formatFlatWiseOutgoingData()
        res.send({data})
    }
    catch(e)
    {
        ErrorHandler.handleError(e,res)
    }
    

})

router.get('/months/ownerWiseData', MiddleWare.auth, async (req, res)=>{

    monthFilter={}
    try{
        checkQueryParam(req)
    
        monthFilter.MONTH=months[parseInt(req.query.monthNumber)-1]
        monthFilter.YEAR=parseInt(req.query.year)

        const data = (await MonthlyData.getDataforMonth(monthFilter)).formatOwnerWiseOutgoingData()
        res.send({data})
    }
    catch(e)
    {
        ErrorHandler.handleError(e,res)
    }
    

})

router.get('/months/estimates', MiddleWare.auth, async (req, res)=>{

    monthFilter={}
    try{
        checkQueryParam(req)
    
        monthFilter.MONTH=months[parseInt(req.query.monthNumber)-1]
        monthFilter.YEAR=parseInt(req.query.year)

    
        const data = (await MonthlyData.getDataforMonth(monthFilter)).formatEstimatesOurgoingData()
        res.send({data})
    }
    catch(e)
    {
        ErrorHandler.handleError(e,res)
    }
    

})

router.get('/months/expenses', MiddleWare.auth, async (req, res)=>{

    monthFilter={}
    try{
        checkQueryParam(req)
    
        monthFilter.MONTH=months[parseInt(req.query.monthNumber)-1]
        monthFilter.YEAR=parseInt(req.query.year)

        const data = (await MonthlyData.getDataforMonth(monthFilter)).formatExpensesOurgoingData()
        res.send({data})
    }
    catch(e)
    {
        ErrorHandler.handleError(e,res)
    }
    

})

router.get('/months/available', MiddleWare.auth, async(req,res)=>{
    try{
        res.send(await MonthlyData.getUniqueMonthAndYear())
    }
    catch(e){
        ErrorHandler.handleError(e,res)
    }
})

module.exports = router