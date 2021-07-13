let mongoose = require('mongoose')

const {getConnection} = require('../config/dbClient')


let DocsModel;
try{
    mongoose.connection = getConnection()
    const DocsSheama = new mongoose.Schema({'name':String, 'type': String, 'data':String})
    DocsModel = mongoose.model('Docs', DocsSheama)
}
catch(err)
{
    console.dir(err)
}
exports.DocsModel = DocsModel;
