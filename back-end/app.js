var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var cors = require('cors')
var logger = require('morgan');
var mongoose = require('mongoose')
var usersRouter = require('./routes/users');
var busesRouter = require('./routes/buses');
var bookingRouter = require('./routes/booking')
var paymentRouter = require('./routes/payment')
var bodyParser = require('body-parser');
var app = express();
// connecting database
mongoose.connect('mongodb+srv://user1:user1@booking-xfqri.mongodb.net/Bus-Booking?retryWrites=true&w=majority',{ useUnifiedTopology: true } )
        .then(()=>console.log('connected with mongodb'))
        .catch(err => console.log(err))

app.use(logger('dev'));
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended:false})) 
app.use(bodyParser()) 
app.use(cookieParser());



app.use('/users', usersRouter);
app.use('/buses', busesRouter);
app.use('/booking',bookingRouter)
app.use('/payment',paymentRouter)


app.listen(5050,()=>{console.log('Listening on :5050')})