const {Schema} = require("mongoose")
const types = {
    Vote: {
        up: Number,
        down: Number
    },
}
const schemas = {
    
    sJobs : {
        email: { 
            type: String,
            required: true,
            unique:true
        },
        cryptoAddress: { 
            type: String,
            required: true,
            unique:true
        },
        description: String,
        hours: { 
            type: Number,
            min:0,
            default:0
        },
        status: { 
            type: String,
            default:'pending'
        },
        proofOfWork: {
            before:{
                type: String,
                required:true
            },
            after:{
                type: String,
                required:true
            }
        },
        votes:  {
            up: {
                type:Number,
                min:0,
                default:0
            },
            down: {
                type:Number,
                min:0,
                default:0
            }
        }
    },


}

exports.schemas = schemas;