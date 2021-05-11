const mongoose=require('mongoose')
let Payment = new mongoose.Schema({
    transaction_id:{type:Number},
    user: { type:String},
    ammount:{type:Number}
})

const Pay= mongoose.model('Payment',Payment)

module.exports = Pay