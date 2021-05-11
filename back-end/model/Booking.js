let mongoose = require('mongoose')
let bookingSchema = new mongoose.Schema({
    ticketId:{type:Number},
    user:{ type:String,required:true},
    travalDate:{type:String,required:true},
    email:{ type:String,required:true},
    busId:{ type:String,required:true},
    from:{ type:String,required:true},
    to:{ type:String,required:true},
    seatNumber:{ type:Number},
    totalAmmount:{ type:Number}

})
const Booking = mongoose.model('Booking',bookingSchema)
module.exports =Booking