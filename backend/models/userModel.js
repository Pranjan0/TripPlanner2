const {Schema, model} = require('../connection');

const schemaObject =  new Schema({
    name : String,
    age : Number,
    mobile : Number,
    email : String,
    password : String,
})

module.exports = model('users', schemaObject);