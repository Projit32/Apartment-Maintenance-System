const mongoose = require('mongoose')
const Exceptions = require('../utils/exceptions')


const momSchema = mongoose.Schema(
  {
    DATE: {
        type: Date
    },
    MOMS: {
      type: [
        {
          TOPIC: {
            type: String
          },
          DECISION: {
            type: String
          }
        }
      ]
    }
  }
)

momSchema.methods.toJSON = function(){
  const moms=[]
  this.MOMS.forEach(element=>{
    moms.push({
      topic:element.TOPIC,
      decision:element.DECISION
    })
  })
  outgoingData={
      date: this.DATE,
      moms: moms,
  }
  return outgoingData
}


momSchema.statics.findByStartandEndDates = async(start, end)=>{
  const moms = await Moms.find({DATE:{
    $gte:start,
    $lte:end
  }}).sort({DATE: 'asc'})
  let output=[]
  moms.forEach(element => {
    output.push(element)
  });
  return output
}



const Moms = mongoose.model('moms',momSchema)

module.exports = Moms