const mongoose = require('mongoose');
const bcrypt = 	 require('bcryptjs');





//This will be used for the google sign in/ will hold google users 
const userSchema = mongoose.Schema({
  firstName:String,
  lastName:String,
  email:String,
  password: String,
  userAvtar:String
})

userSchema.methods.apiRepr = function() {
  return {
    name:`${this.firstName} ${this.lastName}`,
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


userSchema.methods.validatePassword = function(password) {
  return bcrypt.compare(password, this.password);
}

userSchema.statics.hashPassword = function(password) {
  return bcrypt.hash(password, 12);
}

const User = mongoose.model('User',userSchema);
const Vacation = mongoose.model('Vacation',vacationSchema);


module.exports = {User,Vacation};