const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const {BasicStrategy} = require('passport-http');
const mongoose =   require('mongoose');
const { User } =  require('./models');



validateUser = new BasicStrategy(
    (email, password, callback) => {
      let user;
      User
      .findOne({email})
      .exec()
      .then(_user => {
        user = _user;
        if (!user) {
          return callback(null, {error:'Incorrect email'});
        }
        user.validatePassword(password)

      .then(isValid => {
        if (!isValid) {
          return callback(null, {error:'Incorrect password'});
        }
        else {
          return callback(null, user);
        }
      });
    })
});


createToken = (req, res, next) => {
    if(req.user){
        if(req.user.error){
          res.status(401).json({message: req.user.error});
        }else{
          const user = req.user
          jwt.sign({ user }, 'secret', (err, token) => {
            if (err) {
              res.sendStatus(403)
            } else {
              req.token = token
              next()
            }
          })
        }
    }
}
  
getToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization']
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ')
        const bearerToken = bearer[1]
        req.token = bearerToken
        next()
    }
    else {
        res.sendStatus(403)
    }
}
  
verifytoken = (req, res, next) => {
    const token = req.token
    jwt.verify(token, 'secretkey', (err, authData) => {
        if (err) {
        res.sendStatus(403)
        } else {
        next()
        }
    })
}

  module.exports = {createToken,getToken,verifytoken,validateUser }