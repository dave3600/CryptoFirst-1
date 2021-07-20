let mongoose = require('mongoose')
const {schemas} = require('../schema/schema')


let Jobs;
try{
    const JobsSchema = new mongoose.Schema(schemas.sJobs,{timestamps : true})
    Jobs = mongoose.model('Jobs', JobsSchema)
}
catch(err)
{
    console.dir(err)
}
exports.Jobs = Jobs;
