const {Schema, model, Types} = require('../connection');

const schemaObject =  new Schema({
    place : {type : Types.ObjectId, ref:'users'},
    time : Date,
    visited : {type : Boolean, default: false},
    comments : String,
})

module.exports = model('itinerary', schemaObject);