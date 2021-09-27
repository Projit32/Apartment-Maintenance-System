const mongoose = require('mongoose')
const Exceptions = require('../utils/exceptions')

const ledgerSchema = new mongoose.Schema({
    ITEM_NAME: {
      type: String
    },
    ITEM_CATEGORY: {
      type: String
    },
    MONTH: {
      type: String
    },
    YEAR: {
      type: Number
    },
    CREDIT: {
      type: Number
    },
    DEBIT: {
      type: Number
    },
    BALANCE: {
      type: Number
    }
  },{collection: 'ledger_data'})




ledgerSchema.statics.getElectricityTrendsData = async(YEAR)=>{

  filters={ITEM_CATEGORY:'VAR'}
  if(YEAR)
  {
    filters['YEAR']= YEAR
  }
  const data = await LedgerData.find(filters)
  if(!data.length) throw Exceptions.NoDataException('NO_DATA_FOUND','No ledger found for this time frame',400)
  outgoingData=[]
  data.forEach(element => {
      if(element.ITEM_NAME === 'Electricity Bill')
      {
        outgoingData.push({month: element.MONTH, year: element.YEAR, amount: element.DEBIT })
      }
      
  });

  return outgoingData
}

ledgerSchema.statics.getMonthlyLedgerData=async(MONTH, YEAR)=>{

  const data = await LedgerData.find({MONTH,YEAR})
  if(!data.length) throw Exceptions.NoDataException('NO_DATA_FOUND','No ledger found for this time frame',400)

  outgoingData=[]
  data.forEach((element)=>{
    outgoingData.push({
      item: element.ITEM_NAME,
      credit: element.CREDIT,
      debit: element.DEBIT,
      balance: element.BALANCE
    })
  })

  return outgoingData
}



const LedgerData = mongoose.model('ledger_data', ledgerSchema)

module.exports = LedgerData