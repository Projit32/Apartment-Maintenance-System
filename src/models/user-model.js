const mongoose = require('mongoose')
const Exceptions = require('../utils/exceptions')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = mongoose.Schema({
    OWNER_NAME: {
      type: String
    },
    QNT: {
      type: Number
    },
    FLT_NUMS: {
      type: [
        String
      ]
    },
    ACCESS_KEY:{
      type: String,
      minlength: 7,
      trim: true,
      validate(value) {
          if (value.toLowerCase().includes('password')) {
              throw  Exceptions.PasswordException("INV_PASS",'Password cannot contain "password"')
          }
      }
    },
    EMAILS: {
        type: [
            String
          ]
    },
    TOKENS: {
      type: [String]
    },
})

userSchema.methods.toJSON = function(){
    outgoingData={
        name: this.OWNER_NAME,
        emails: this.EMAILS,
        flatsOccupied: this.FLT_NUMS 
    }
    return outgoingData
}

userSchema.methods.generateAuthToken = async function () {
  const token = jwt.sign({ owner: this._id.toString() }, process.env.JWT_SECRET, {expiresIn:'1 hour'})

  this.TOKENS = this.TOKENS.concat(token)
  await this.save()

  return token
}

userSchema.statics.findByCredentials = async(email, password)=>{
  const user = await User.findOne({EMAILS:email})
  if(!user) throw Exceptions.FailedLoginException("INV_CRED", 'Unable to login')
  
  const isMatch = await bcrypt.compare(password, user.ACCESS_KEY)
  if (!isMatch) throw Exceptions.FailedLoginException("INV_CRED", 'Unable to login')

  return user
}

userSchema.statics.getUserByFlat=async(flatNumber)=>{
  const data = await User.findOne({ FLT_NUMS: flatNumber})
  if(!data) throw Exceptions.NoDataException('NO_DATA_FOUND','No Flats found',400)

  return data
}

userSchema.methods.removeToken=async function(token){
  this.TOKENS = this.TOKENS.filter((element)=>{
    return element !== token
  })
  this.save()
}


userSchema.pre('save', async function (next) {

  if (this.isModified('ACCESS_KEY')) {
      this.ACCESS_KEY = await bcrypt.hash(this.ACCESS_KEY, 8)
  }

  next()
})

const User = mongoose.model('members_details',userSchema)

module.exports=User