const express = require("express");
const router = express.Router();

const Model = require("../models/userModel");

router.post("/add", (req, res) => {
  console.log(req.body);
  // res.send("added successfully");

  new Model(req.body)
    .save()
    .then((result) => {
      console.log(result);
      res.json(result); //default status code is 200
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

router.get("/getall", (req, res) => {
  Model.find({})
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
//':' denotes a parameter
router.get("/getbyemail/:email", (req, res) => {
  Model.findOne({ email: req.params.email })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.delete("/delete/:id", (req, res) => {
  Model.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.put("/update/:id", (req, res) => {
  Model.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.post('/authenticate', (req, res) => {
    const formdata = req.body;
    Model.findOne({email : formdata.email, password : formdata.password})
    .then((result) => {
        console.log(result);
        
        // if condition will be true if user is found
        if(result){
            console.log('login success');
            res.json(result);
        }else{
            console.log('Login Failed');
            res.status(400).json({status : 'Login Failed'});
        }

    }).catch((err) => {
        console.error(err);
        res.status(500).json(err);
    });
});

module.exports = router;
