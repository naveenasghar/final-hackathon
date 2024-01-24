const express = require('express')
const mongoose = require('mongoose')

const ShowcaseFormScheme = new mongoose.Schema({
     projectTitle: String,
     devName: String, 
     description: String, 
     hostedURL: String,
     date: String
})

const ShowcaseFormModel = mongoose.model("ShowcaseForm" , ShowcaseFormScheme)
module.exports = ShowcaseFormModel