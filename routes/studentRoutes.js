const express = require('express');
const router = express.Router();
const  Student = require('../models/studentModel');
router.get('/students',async(req,res)=>{
    try {
       const students = await Student.find({});
       res.render('index',{students});
    } catch (error) {
        console.log(error)
    }
})
router.get('/students/:id/open',async(req,res)=>{
    const {id} = req.params;
    const student = await Student.findById(id);
    res.render('open',{student})
})
router.get('/new',(req,res)=>{
    res.render('new')
})
router.post('/students',async(req,res)=>{
    const student = await Student.create(req.body);
    res.redirect('/students');
})
router.get('/students/:id/edit',async(req,res)=>{
    const {id} = req.params;
   const student =  await Student.findById(id);
    res.render('edit',{student});
})
router.post('/students/:id/edit',async(req,res)=>{
    const {id} = req.params;
    const {name,age,year,email,grade,remark} = req.body;
await Student.findByIdAndUpdate(id,{
    name:name,
    age:age,
    email:email,
    year:year,
    grade:grade,
    remark:remark
});
res.redirect('/students')
})

router.get('/students/:id',async(req,res)=>{
    const {id} = req.params;
    await Student.findByIdAndDelete(id);
    res.redirect('/students');
    
})
module.exports = router;
