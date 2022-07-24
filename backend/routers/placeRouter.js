const express = require('express');
const router = express.Router();

const Model=require('../models/placeModel');

router.post('/add',(req, res)=>{
    console.log(req.body);
    // res.send("added successfully");

    new Model(req.body).save()
    .then((result) => {
        console.log(result);
        res.json(result);   //default status code is 200
    }).catch((err) => {
        console.log(err);
        res.json(err);
    });

})

router.get('/getall',(req,res)=>{
   Model.find({})
   .then((result) => {
    console.log(result);
    res.json(result);
}).catch((err) => {
    console.log(err);
    res.status(500).json(err);
});
})
//':' denotes a parameter
router.get('/getbyemail/:email', (req, res) => {
   
    Model.findOne({email : req.params.email})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err);
    });
})

router.delete('/delete/:id',(req, res)=>{
Model.findByIdAndDelete(req.params.id)
.then((result) => {
    res.json(result);
}).catch((err) => {
    console.error(err);
    res.status(500).json(err);
});
})

router.put('/update/:id',(req,res)=>{
Model.findByIdAndUpdate(req.params.id,req.body, {new:true})
.then((result) => {
    res.json(result);
}).catch((err) => {
    console.error(err);
    res.status(500).json(err);
});
})

module.exports = router;