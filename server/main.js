const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const {DocsModel} = require('./src/model/Worrior')

const PORT = 3000;


const app = express()
app.use(cors())

app.post("/job", function(req,res){
    docs = new DocsModel({'name':'itachi', 'type':'Justu', 'data':'Genjustu'})
    docs.save().catch((err) => {
        console.dir(err)
    })
    res.send('inserted okay')
})
app.get("/job",function(req,res){
    
    let data;
    DocsModel.find({}, function(err, docs) {

        console.debug('docs:'+docs)
        res.send("docs:",JSON.stringify(docs))
    })
    res.send("no data")
})
app.get("/test",function(res,res){
    res.send('okay');
})

app.listen(PORT, function(err){
    console.info(`Crypto server running at port : ${PORT}`)
})
