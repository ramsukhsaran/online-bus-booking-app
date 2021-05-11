var express= require('express')
var router = express.Router()
const mongoose=require('mongoose')
var Pay = require('../model/Payment')

router.post('/',(req,res) => {
    let body = req.body
    let paymentData = { 
        transaction_id:body.transaction_id,
        user: body.user,
        ammount: body.ammount
    }
    console.log(paymentData)
    let payment = new Pay(paymentData)
    payment.save((err,data)=>{
        if(err) res.send(err)
        else res.send(data)
    })
})

module.exports = router;