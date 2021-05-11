var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false);
var Bus = require('../model/Bus')

router.get('/',(req,res) => {
    let route = req.query.route
    Bus.find({route},(err, data)=>{
        if(err) res.send(err)
        else res.json(data)
    })

    // Bus.findOne({},(err,data) => {console.log(err)})  // if there is no document
})
    .get('/routeId', (req,res)=>{
     let routeId= req.query.routeId
     Bus.find({routeId},(err,data)=>{
        if(err) res.send(err)
        else res.json(data)
      })
})
    .post('/update', async (req,res) => {
        let routeId = req.body.routeId
        let avaliable=req.body.avaliable
        await Bus.findOneAndUpdate({routeId:routeId},{avaliable:avaliable},{new:true},(err,data)=>{
            if(err) res.send(err)
            else res.json(data)

        })

})
       .post('/update/seat',async(req,res)=>{
          let routeId=req.body.routeId
          let bookedSeat=req.body.bookedSeat
          await Bus.findOneAndUpdate({routeId},{bookedSeats:bookedSeat},{new:true},(err,data)=>{
            if(err) res.send(err)
            else res.json(data)

           })
})


module.exports = router;
