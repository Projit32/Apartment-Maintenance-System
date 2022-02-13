const mongoose = require('mongoose')
const Exceptions = require('../utils/exceptions')


const featureSchema = mongoose.Schema(
  {
    HEADING: {
      type: String
    },
    DESCRIPTION: {
      type: String
    },
    IMG_LINK: {
      type: String
    },
    DATE: {
      type: Date
    },
    FOCUSED_WORD: {
      type: String
    },
    BTN_LINK: {
      type: String
    }
  }
)

featureSchema.methods.toJSON = function(){

  let outgoingData={
      heading: this.HEADING,
      desc: this.DESCRIPTION,
      img: this.IMG_LINK,
      date: this.DATE,
  }
  if(this.FOCUSED_WORD){outgoingData.focused=this.FOCUSED_WORD}
  if(this.BTN_LINK){outgoingData.btn=this.BTN_LINK}
  return outgoingData
}



featureSchema.statics.getAllFeatures = async()=>{
  const data = await Features.find({}).sort({DATE: 'desc'})
  let output=[]
  data.forEach(element => {
    output.push(element)
  });

  return output
}


const Features = mongoose.model('features',featureSchema)

module.exports = Features