const mongoose = require('mongoose')
const Exceptions = require('../utils/exceptions')

const monthlySchema = new mongoose.Schema({
    MONTH: {
      type: String
    },
    YEAR: {
      type: Number
    },
    MONTHLY_EST: {
      type: [
        {
          ITEM: {
            type: String
          },
          Price: {
            type: Number
          }
        }
      ]
    },
    MONTHLY_EXP: {
      TOTAL_INCOME: {
        type: Number
      },
      TOTAL_EXPENSES: {
        type: Number
      },
      BALANCE: {
        type: Number
      }
    },
    MONTHLY_DIST: {
      DIVIDING_MEMBERS: {
        type: Number
      },
      FLATWISE_DIST: {
        type: [
            {
                FLAT_NUM: {
                  type: String
                },
                AMOUNT: {
                  type: Number
                },
                COMMENT: {
                  type: String
                }
            }
        ]
      },
      OWNERWISE_DIST: {
        type: [
            {
                OWNER: {
                  type: String
                },
                FLATS: {
                  type: [
                    String
                  ]
                },
                RATE: {
                  type: Number
                },
                TOT_RATE: {
                  type: Number
                },
                EMERGENCY_FUND: {
                  type: Number
                },
                TOTAL: {
                  type: Number
                },
                PAYMENT_RECEIVED: {
                  type: String
                },
                COMMENTS: {
                  type: String
                }
            }
        ]
      }
    }
})

monthlySchema.methods.formatFlatWiseOutgoingData=function()
{
    outgoingData=[]
    this.MONTHLY_DIST.FLATWISE_DIST.forEach((element)=>{
        data={
            flatNumber:element.FLAT_NUM,
            amount:element.AMOUNT,
            defaulterFlag:element.COMMENT ==="DEFAULTER",
            unsoldFlag:element.COMMENT ==="UNSOLD",
            notPayingFlag:element.COMMENT ==="NOT PAYING"
        }
        outgoingData.push(data)
    })
    return outgoingData
}

monthlySchema.methods.formatOwnerWiseOutgoingData=function()
{
    outgoingData=[]
    this.MONTHLY_DIST.OWNERWISE_DIST.forEach((element)=>{
        data={
            Owner:element.OWNER,
            flatsAquired:element.FLATS,
            ratePerFlat:element.RATE,
            rateTotal:element.TOT_RATE,
            emergencyFundAmount:element.EMERGENCY_FUND,
            grandTotalPayable:element.TOTAL,
            paymentReceivedFlag:element.PAYMENT_RECEIVED==="YES"
        }
        outgoingData.push(data)
    })
    return outgoingData
}


monthlySchema.methods.formatExpensesOurgoingData=function(){
    data={
      monthlyAccumulation:this.MONTHLY_EXP.TOTAL_INCOME,
      monthlyExpense:this.MONTHLY_EXP.TOTAL_EXPENSES,
      balance:this.MONTHLY_EXP.BALANCE
    }
    return data
}

monthlySchema.methods.formatEstimatesOurgoingData=function(){
  data=[]
  this.MONTHLY_EST.forEach((element)=>{
    data.push({
      itemName: element.ITEM,
      itemPrice:element.Price
    })
  })
  return data
}


monthlySchema.statics.getDataforMonth = async (timeFilter)=>{
    const data = await MonthlyData.findOne(timeFilter)
    if(!data) throw Exceptions.NoDataException('NO_DATA_FOUND', 'No data was found for the given paramters',400)
    return data
}

monthlySchema.statics.getUniqueMonthByYear = async (YEAR)=>{
  const months = await MonthlyData.find({YEAR}).distinct('MONTH')
  return {months}
}


monthlySchema.statics.getUniqueYear = async ()=>{
  const years = await MonthlyData.find({}).distinct('YEAR')
  return {years}
}


const MonthlyData = mongoose.model('monthly_stats', monthlySchema)

module.exports = MonthlyData