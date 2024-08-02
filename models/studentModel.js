const express = require('express')
const { default: mongoose } = require('mongoose')

const studentSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
        },
        class:{
            type:String,
            required:true,
        },
       grade:{
        type:String,
       } ,
        age:{
            type:Number,
            required:true,
    }

}
   
)
module.exports = mongoose.model('Student',studentSchema);