const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/routes')
const cors = require("cors")

mongoose.connect('mongodb://localhost:27017/mcqdb').then(()=>{
    console.log('mongoDb connected')
}).catch((err)=>{
    console.log(err.message)
})

const app = express()

app.use(cors())

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Your application is working')
})

app.use('/', router)

app.listen(5000, ()=>{
    console.log(`server started on http://localhost:${5000}`)
})