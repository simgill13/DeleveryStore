const env =                                                               require('dotenv').config().parsed;
const fs =                                                                require('fs');
const path =                                                              require('path')
const bodyParser =                                                        require('body-parser')
const express =                                                           require('express')
const jwt =                                                               require('jsonwebtoken')
const passport =                                                          require("passport"); 
const {BasicStrategy} =                                                   require('passport-http');
const BearerStrategy =                                                    require("passport-http-bearer").Strategy; 
const app =                                                               express()
const mongoose =                                                          require('mongoose');
const { User, Vacation } =                                                require('./models');
const { createToken,getToken,verifytoken } =                              require('./middleware')
const port =                                                              (process.env.PORT || 8080)
const indexPath =                                                         path.join(__dirname, './dist/index.html')
const DATABASE_URL =                                                      process.env.DATABASE_URL ||
                                                                          global.DATABASE_URL || env.DATABASE_URL;

app.use(express.static(path.resolve(__dirname, './dist')));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.json({limit: '50mb'}));
app.get(/^(?!\/api(\/|$))/, (req, res) => {
  process.env.NODE_ENV === 'development' ? res.json({ msg: 'Dev-server' }) : res.sendFile(indexPath);
});
app.use(passport.initialize());







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


app.post('/api/user/signup', (req, res) => {
  const {firstName,lastName,email,password} = req.body.userobj
  const userAvtar = req.body.userobj.userPhoto || ''
  User
  .find({email})
  .countDocuments()
  .exec()
  .then(count => {
      if(count >= 1){
          return res.status(401).json({message:"email is already taken"})
      }
      return  User.hashPassword(password);      
  })
  .then(hash => {
     return User
    .create({
      firstName,
      lastName,
      email,
      password:hash,
      userAvtar
    })
  })
  .then(newUser => {
    res.status(201).json(newUser.apiRepr())
  })

})




const validateUser = new BasicStrategy(
  (email, password, callback) => {
    let user;
    User
    .findOne({email})
    .exec()
    .then(_user => {
      user = _user;
      if (!user) {
        return callback(null, false, "Incorrect Email");
      }
      user.validatePassword(password)
    
    .then(isValid => {
      if (!isValid) {
        return callback(null, false, "Incorrect password");
      }
      else {
        return callback(null, user);
      }
    });
  })
});

passport.use(validateUser);

app.post('/api/user/login', passport.authenticate('basic', {session: false}), (req, res) => {
  console.log('REQ+++++',req)
  console.log('+++++++++',req.body)
  const email = req.body.email
  
  User
    .findOne({ email })
    .then(user => {
      if (!user) {
        return res.status(404).json({message: 'Invalid Credentials'});
      } else {
       
        return res.status(200).json(user.apiRepr());
      }
    })
    .catch(err => {
      res.status(500).json({message: 'Internal server error'})
    });
})





runServer = (port) => {
  return new Promise((resolve, reject) => {
    mongoose.connect(DATABASE_URL, { useNewUrlParser: true }, err => {
      if (err) {
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
  process.env.NODE_ENV === 'development' ? runServer(3000) : runServer(port);
}

module.exports = { app, runServer };
