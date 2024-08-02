const express = require('express');
const router = express.Router();
const  Student = require('../models/studentModel');


router.get('/home',async(req,res)=>{
    try {
       const students = await Student.find({});
       res.render('index',{students});
    } catch (error) {
        console.log(error)
    }

   
})

router.get('/new',async(req,res)=>{
    const {id} = req.params;
    const student = req.body;
    await Student.insertOne({student});
    res.redirect('/students');


})

module.exports = router;
