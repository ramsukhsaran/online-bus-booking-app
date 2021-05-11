var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
var Booking = require('../model/Booking')

router.post('/book',(req,res)=>{
    let body = req.body
    let bookingData={
        ticketId:Date.now(),
        user:body.user,
        email: body.email,
        travalDate: body.travalDate,
        busId: body.busId,
        from: body.from,
        to: body.to,
        seatNumber: body.seatNumber,
        totalAmmount: body.totalAmmount
    }
    let book=new Booking(bookingData)
    // creating new bookingData and save to db
    book.save((err,data)=>{
        if(err) res.send(err)
        else res.status(201).json(data)
    })
})
    .get('/myBooking',(req,res)=>{
        let email = req.query.email
        let ticketId=req.query.ticketId
        Booking.findOne({email,ticketId},(err, data)=>{
            if(err) res.send(err)
            else res.json(data)
        })
    })
    
    .get('/ticket',(req,res)=>{
      let ticketId=req.query.ticketId
      Booking.findOne({ticketId},(err,data)=>{
         if(err) res.send(err)
         else res.json(data)
        })
         
     })

module.exports = router;