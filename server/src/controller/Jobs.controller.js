const express = require('express')

const {Jobs} = require('../model/model')




jobRouter =  express.Router()

jobRouter.post("/", (req,res,next) => {
    Jobs.find({email:req.body.email}).then(result => {
        if(result.length > 0){
            res.send(req.body.email + " already exists")
        }
        else next()
    })
},function(req,res){
    jobs = new Jobs(req.body)
    jobs.save().then((result) => {
        res.status(201).send(result)
    }).catch((err) => {
        console.error(err)
    })
})
jobRouter.get("/:id",function(req,res){
    Jobs.findById(req.params.id).then(function(result) {
        res.status(201).send(result)
    }).catch((err) => {
        console.error(err)
    })
})
jobRouter.get("/",function(req,res){
    Jobs.find({}).then(function(result) {
        res.status(201).send(result)
    }).catch((err) => {
        console.error(err)
    })
})
jobRouter.delete("/:id",(req,res) => {
        Jobs.findByIdAndDelete(req.params.id).then(function(result) {
            res.status(201).send(result);
        }).catch((err) => {
            console.error(err)
        })
})




exports.jobRouter = jobRouter

