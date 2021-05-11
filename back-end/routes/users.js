var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
const bcrypt= require('bcrypt')
var User = require('../model/User')

/* GET users listing. */
router
   .get('/', function(req, res) {
     let emailId = req.query.emailId
     User.findOne({emailId},(err,user) => {
       if(err) res.send(err)
       else res.json(user)
     })
  })
  .post('/register', async (req, res) =>{
    let body=req.body 
    console.log(body)
    let hashPassword= await bcrypt.hash(body.password,10)
    let userDet={ username:body.username,emailId:body.emailId, password:hashPassword,mobileno:body.mobileno}
    let user = new User(userDet)
    // saving data to mongodb
    user.save((err, user) =>{
      if(err) res.send(err)
      else res.status(201).json(user)
    })
   

  }) 

module.exports = router;
