const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')

createToken = (req, res, next) => {
    const user = req.body.userobj;
    jwt.sign({ user }, 'secret', (err, token) => {
      if (err) {
        res.sendStatus(403)
      } else {
        req.token = token
        next()
      }
    })
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

  module.exports = {createToken,getToken,verifytoken }