const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const parkSchema = new Schema({
    isStay: String,
    telNo: String,
    city : String,
    longitude : String,
    latitude : String,
    size : String,
    name  : String,
    pay : String,
    url : String,
    organization: String ,
    address : String,
    type : String,
    facilities : String,
    maxPersons : Number,
    updateDate : Date    
});

const Park = mongoose.model('Park', parkSchema);
module.exports = Park;