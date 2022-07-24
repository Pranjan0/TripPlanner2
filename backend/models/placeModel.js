const {Schema, model} = require('../connection');
const Myplaces =  new Schema({
    title : String,
    city : String,
    state : String,
    pincode : Number,
    createdat: Date,
    type : String,
    budget : Number,
    description : String,
    bestTime: String
})
module.exports = model('places', Myplaces);