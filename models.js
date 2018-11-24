const mongoose = require('mongoose');





//This will be used for the google sign in/ will hold google users 
const userSchema = mongoose.Schema({

  googleId: String,
  name:String,
  email:String,
  profilePicURL:String,
  accessToken: String,
  expiresAt: String,
  favoriteVacations: Array
})

userSchema.methods.apiRepr = function() {
  return {
    id: this._id,
    name:this.name,
    email: this.email 
  };
}


const vacationSchema = mongoose.Schema({
  country: {type: String, required: true},
  city:{type: String, required: true},
  description: {type: String, required: true},
  videoUrl: {type: String, required: true},
  soundUrl: String
})


const User = mongoose.model('User',userSchema);
const Vacation = mongoose.model('Vacation',vacationSchema);


module.exports = {User,Vacation};