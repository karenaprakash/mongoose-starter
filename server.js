//how to add data in mongoose
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//we need to connect db only once 
mongoose.connect('mongodb://localhost:27017/test');
//Schema
const carSchema = mongoose.Schema({
    brand : String,
    model : String,
    year  : Number,
    avail : Boolean
})
//Model
const Car = mongoose.model('Car',carSchema);
/*------------------- add data -------------------*/
/*
const addCar = new Car({
    brand : 'Ford',
    model : 'Focus',
    year : 2017 ,
    avail : true
})

//save data
addCar.save((err,doc)=>{
    if(err) return console.log(err);
    console.log(doc)
})
*/

/*------------------- get data  -------------------*/


/*
Car.find((err,doc)=>{
    if(err) return console.log(err);
    console.log(doc)
})
*/

//get perticular data
/*
Car.find({brand:'Ford'},(err,doc)=>{
    if(err) return console.log(err);
    console.log(doc)
})
*/

//findOne
/*
Car.findOne({brand:'Ford'},(err,doc)=>{
    if(err) return console.log(err);
    console.log(doc)
})
*/

//findById
/*
Car.findById("5d64c56ee14a6c13c4580362",(err,doc)=>{
    if(err) return console.log(err);
    console.log(doc)
})
*/


/*------------------- delete data  -------------------*/

//findOneAndRemove 
/*
Car.findOneAndRemove({brand:'Ford'},(err,doc)=>{
    if(err) return console.log(err);
    console.log(doc)
})
*/

//findByIdAndRemove 
/*
Car.findByIdAndRemove("5d64c56ee14a6c13c4580362",(err,doc)=>{
    if(err) return console.log(err);
    console.log(doc)
})
*/

//remove 
/*
Car.remove({brand:'Ford'},(err,doc)=>{
    if(err) return console.log(err);
    console.log(doc)
})
*/

//wipe all data 
/*
Car.remove({},(err,doc)=>{
    if(err) return console.log(err);
    console.log(doc)
})
*/

/*------------------- update data  -------------------*/

//update
/*
Car.update(
    {_id : "5d64cd0d58f2a615f72f6c59"},
    { $set : {brand : "nissan"} },
    (err,doc)=>{
    if(err) return console.log(err);
    console.log(doc)
})
*/


//findByIdAndUpdate : old data 
/*
Car.findByIdAndUpdate(
    "5d64cd0d58f2a615f72f6c59" ,
    { $set : {brand : "Farrari"} },
    { new : false },
    (err,doc)=>{
    if(err) return console.log(err);
    console.log(doc)
})
*/