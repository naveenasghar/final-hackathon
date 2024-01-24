const express = require('express')
const mongoose = require('mongoose')

const UsersScheme = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const UsersModel = mongoose.model("users" , UsersScheme)
module.exports = UsersModel