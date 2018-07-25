const mongoose = require('mongoose')
//create instance of mongoose schema

const Schema = mongoose.Schema

//Create a new schema for user in mongoDB

const userSchema = new Schema({
    email : String,
    password : String
})

//create a module for the schema and export it.

module.exports = mongoose.model('user', userSchema, 'tonmoyuser')