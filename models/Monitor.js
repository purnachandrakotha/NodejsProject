const {Schema, model} = require('mongoose')

const monitorSchema = new Schema({
    
    tagNumber: { type:String, required: true, trim: true, unique: true}, 

    monitorName:{ type:String, required: true, trim: true},
    make:{ type:String, required: true, trim: true}, 
    screenSize:{ type:String, required: true, trim: true}, 
    serialNumber:{ type:String, required: true, trim: true},
    room:{ type:String, required: true, trim: true},
    activeFlag: { type:String, required: true, trim: true}
    

}, {timestamps: true})


module.exports  = model('Monitor', monitorSchema)