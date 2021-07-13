const mongoose = require('mongoose')


const uri = 'mongodb://db:27017/test'
const options = {useNewUrlParser:true, socketTimeoutMS:30000,serverSelectionTimeoutMS:5000,poolSize:10}

function getConnection()
{
    
    console.debug('Attempting to create db server')
    try{
        mongoose.connect(uri, options).catch((function(ex){
            console.dir(ex)
        }))   
    }
    catch(ex){
        console.dir(ex)
    }
    if(mongoose.connection) console.info('DB connection okay')
    else console.info('DB connection failed')
    return mongoose.connection;
}

exports.getConnection = getConnection

