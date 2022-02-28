const mongoose = require('mongoose')
const Exceptions = require('../utils/exceptions')


const reservationSchema = mongoose.Schema(
  {
    DATE: {
      type: Date
    },
    FLAT:{
      type: String
    },
    DESC: {
      type: String
    },
    STATUS:{
      type: String
    }
  }
)

reservationSchema.methods.toJSON = function(){
  outgoingData={
      date: this.DATE,
      desc: this.DESC,
      flat: this.FLAT,
      status: this.STATUS,
      id: this._id
  }
  return outgoingData
}


reservationSchema.statics.findByFlatNumber = async(flat)=>{
  const reservations = await Reservations.find({FLAT:flat})
  let output=[]
  reservations.forEach(element => {
    output.push(element)
  });
  return output
}

reservationSchema.statics.findAll = async()=>{
  const reservations = await Reservations.find({})
  let output=[]
  reservations.forEach(element => {
    output.push(element)
  });
  return output
}

reservationSchema.statics.deleteReservation = async(id)=>{
  const reservations = await Reservations.deleteOne({ _id: id})
}

reservationSchema.statics.createReservation = async(DATE,FLAT,DESC)=>{
  try{
    const STATUS='PENDING'
    const newReservation = new Reservations({DATE,FLAT,DESC,STATUS})
    await newReservation.save()
  }
  catch(e){
    throw InsertException("ERROR CREATING RESERVATION",e.message)
  }

}

const Reservations = mongoose.model('reservations',reservationSchema)

module.exports = Reservations