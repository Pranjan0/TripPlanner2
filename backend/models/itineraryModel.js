const {Schema, model, Types} = require('../connection');

const schemaObject =  new Schema({
    place : {type : Types.ObjectId, ref:'places'},
    time : Date,
    visited : {type : Boolean, default: false},
    addedBy : {type : Types.ObjectId, ref:'users'},
    comments : String,
})

module.exports = model('itinerary', schemaObject);