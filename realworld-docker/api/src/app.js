const {port, host} = require('./../configuration');
const {connectDB} = require('./../utils/db')
const {User} = require('./models/user')
const express = require('express')
const app = express()

connectDB()
    .on('error', console.error.bind(console, 'connection error:'))
    .once("open", startServer)

function startServer(){
    app.get('/users', async (req, res) => {
        try {
            const user = new User({firstName: 'Vlad', lastName: 'Yurchenko'})
            await user.save();
            const users = await User.find()
            res.json({users});
        } catch (err) {
            res.send({err})
        }
    })
    app.get("/test", (req, res)=>{
        res.send("Server is working correctly")
    })
    
    app.listen(8080, ()=>{
        console.log("API-service is working")
    })
}


