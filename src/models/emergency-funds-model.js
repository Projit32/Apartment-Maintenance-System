const mongoose= require('mongoose')
const Exceptions = require('../utils/exceptions')

const fundSchema= new mongoose.Schema({
    FLT_NUM: {
      type: String
    },
    FLT_TLT_AREA: {
      type: Number
    },
    SPR_BLD_FACTOR: {
      type: Number
    },
    CRPT_AREA: {
      type: Number
    },
    RATE: {
      type: Number
    },
    TLT_AMNT: {
      type: Number
    },
    RND_OFF_AMNT: {
      type: Number
    }
})

fundSchema.methods.toJSON= function () {
    outgoingData={
        flatNumber: this.FLAT_NUM,
        totalSqFtArea: this.FLT_TLT_AREA,
        superBuildUp: this.SPR_BLD_FACTOR,
        carpetSqFtArea: this.CRPT_AREA,
        ratePerSqFt: this.RATE,
        totalPayable: this.TLT_AMNT,
        roundOffAmount: this.RND_OFF_AMNT
    }
    return outgoingData
}

fundSchema.statics.getData = async()=>{
    const data = await EmergencyFund.find({})

    if(!data.length) throw Exceptions.NoDataException('NO_DATA_FOUND',"Emergency Funds was not found",400)

    return data
}

const EmergencyFund = mongoose.model('emergency_funds',fundSchema)

module.exports = EmergencyFund