let mongoose = require('mongoose')
const busSchema = new mongoose.Schema({ 
    operatorName:String,
    fare:Number,
    totalSeats:Number,
    avaliable:Number,
    bookedSeats:Array,
    route:String,
    departureTime:String,
    arrivalTime:String,
    busType:String,
    routeId:String,
    from:String,
    to:String

})
const Bus = mongoose.model('Bus',busSchema)
module.exports = Bus