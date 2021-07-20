const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const {jobRouter} = require('./src/controller/Jobs.controller')

const PORT = 3000;

const app = express()
app.use(cors())
app.use(bodyParser.json())

//const uri = 'mongodb://itachi:itachi@db:27017/crypto'
const uri = 'mongodb://db:27017/crypto'
const options = {useNewUrlParser:true, socketTimeoutMS:30000,serverSelectionTimeoutMS:5000,poolSize:10}
mongoose.connect(uri, options).then((result) => {
    app.listen(PORT, function(){
        console.info(`Crypto server running at port : ${PORT}`)
    })
}).catch((function(err){
    console.error(err)
}))   

app.get("/",function(res,res){
    res.status(201).send('An express backend server');
})



app.use("/job",jobRouter)

