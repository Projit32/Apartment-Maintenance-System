const MonthlyModel = require('../models/monthly-model')

const generateUserInfoMailData = async(user)=>{
    const monthlyData =await MonthlyModel.find({})
    
    mailData={}

    //User specific data
    mailData.name=user.OWNER_NAME
    mailData.flats=user.FLT_NUMS
    mailData.emails=user.EMAILS
    mailData.floor=getFloors(user.FLT_NUMS)

    //filtering payment data
    data=[]
    total=0
    monthlyData.forEach((element)=>{
        monthData={
            month:element.MONTH,
            year:element.YEAR
        }
        element.MONTHLY_DIST.OWNERWISE_DIST.forEach((owner_data)=>{
            if(owner_data.OWNER === user.OWNER_NAME)
            {
                monthData.amount=owner_data.TOT_RATE,
                total+=owner_data.TOT_RATE
                monthData.status=owner_data.PAYMENT_RECEIVED 
            }
        })
        data.push(monthData)
        
    })
    mailData.total=total
    mailData.payments=data
    return mailData
}

const getFloors=(flats)=>{
    flatNumber=""
    flats.forEach(element=>{
        if(isNumeric(element.charAt(0)))
        flatNumber += ordinal_suffix_of(element.charAt(0)) + " &"
    })
    return flatNumber.substring(0,flatNumber.length-2)
}

function ordinal_suffix_of(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}

function isNumeric(num){
    return !isNaN(num)
  }

module.exports = {generateUserInfoMailData}