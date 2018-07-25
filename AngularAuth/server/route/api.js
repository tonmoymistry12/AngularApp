const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = require('../models/user')
//declaring connections string to the database
const db = "mongodb://tonmoyuser:Tonmoy1992@ds145881.mlab.com:45881/tonmoyuser"

mongoose.connect(db, err => {
    if(err){
        console.error('Error:'+err)
    }
    else{
        console.log("connected to mongodb")
    }
})

router.get('/', (req, res)=>{
res.send('From API route')
})

//new method to handel the POST request for registration.
router.post('/register',(req,res)=>{
    let userData = req.body
    //next cast this user data in user schema level so that the mongoose can understand.
    let user = new User(userData)
    //final stp is to save it into database
    user.save((error,registeredUser)=>{
        if(error){
            console.log(error)
        }
        else{
            res.status(200).send(registeredUser)
        }

    })
})

router.post('/login', (req, res)=>{
    let userData = req.body
    User.findOne({email:userData.email}, (error, user)=>{
       if(error){
           console.log(error)
       }
       else{
           if(!user){
               res.status(401).send('Invalid Email')
           }
           else
           if(user.password !== userData.password){
            res.status(401).send('Invalid Password')
           }
           else{
               res.status(200).send(user)
           }
       }

    })
})

module.exports = router;