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
        year:{
            type:String,
            required:true,
        },
       grade:{
        type:String,
       } ,
        age:{
            type:Number,
            required:true,
    },
    remark:{
        type:String,
        required:true,
        default:'Average'
    }

}
   
)
module.exports = mongoose.model('Student',studentSchema);