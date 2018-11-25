const env = require('dotenv').config().parsed;
const fs = require('fs');
const path = require('path')
var bodyParser = require('body-parser')
const express = require('express')
const app = express()
const mongoose = require('mongoose');
const {User,Vacation} = require('./models');
const port = (process.env.PORT || 8080)
const indexPath = path.join(__dirname, './dist/index.html')
const DATABASE_URL = process.env.DATABASE_URL ||
global.DATABASE_URL || env.DATABASE_URL;
app.use(express.static(path.resolve(__dirname, './dist')));
app.use(bodyParser.urlencoded({ extended: false })) //try true




app.get(/^(?!\/api(\/|$))/, (req, res) => {
  process.env.NODE_ENV === 'development' ? res.json({msg:'Dev-server'}) :  res.sendFile(indexPath); 
});

app.get('/api/test', (req, res) => {
    res.json({Hello:'newtest'})
});

app.get('/api/vacation', (req, res) => {
    Vacation
    .find()
    .exec()
    .then(data => {
      res.json(data)
    })
    .catch(console.error)
  }
  );












runServer = (port) => {
  
  return new Promise((resolve, reject) => {
      mongoose.connect(DATABASE_URL,{ useNewUrlParser: true }, err => {
        if(err) {
          return reject(err);
      }
        console.log('Db connected');
        app.listen(port, () => {
            resolve();
            console.log(`Server listening on ${port}`)
            
        }).on('error', reject);
      });  
  });
}


if (require.main === module) {
   process.env.NODE_ENV === 'development' ? runServer(3000)  : runServer(port);  
}

module.exports = {app,runServer};
