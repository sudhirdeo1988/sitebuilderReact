const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const userFileName = './src/pageJSON/sampleSite.json';
let userFileData =  JSON.parse(fs.readFileSync(userFileName, 'utf-8'));


exports.checkAuth = (req, res, next) => {
  console.log('Method is: ' + req.method + ' URL is: ' + req.url);
  next();
};

// ---- Get user Data
exports.getuser = (req, res, next) => {
    if (userFileData) {
      res.status(201).json({
        status: 'success',
        message: userFileData.userData
      });
    }
};

// ---- Update user Data by ID
exports.updateuser = (req, res, next) => {
  let param_id = userFileData.userData;
  if (param_id) {
    param_id = {
          ...param_id,
          "name": req.body.name,
          "userName": req.body.name,
          "email": req.body.email
    }
      userFileData = {...userFileData, param_id}
      fs.writeFileSync(userFileName, JSON.stringify(userFileData));
      res.status(201).json({
        status: 'success',
        message: userFileData
      });
  } else {
    res.status(404).json({
      status: 'Fail',
      message: 'Error'
    });
  }
};


// ------  Add new Data
exports.adduser = (req, res) =>{
    const newData={
      "userData":{
        "userID": req.body.id,
        "name": req.body.name,
        "userName": req.body.name,
        "email": req.body.email,
        "password": req.body.password
      }
    };
    const newuser = Object.assign({ ...newData });
    userFileData.push(newuser);
    fs.writeFileSync(userFileName, JSON.stringify(userFileData));
    res.status('201').json({
        status: 'success',
        userFileData
    });
}