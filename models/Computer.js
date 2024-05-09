const {Schema, model} = require('mongoose')

const computerSchema = new Schema({
    
    tagNumber: { type:String, required: true, trim: true, unique: true}, 

    computerName:{ type:String, required: true, trim: true},
    make:{ type:String, required: true, trim: true}, 
    model:{ type:String, required: true, trim: true}, 
    serialNumber:{ type:String, required: true, trim: true},
    room:{ type:String, required: true, trim: true},
    department:{ type:String, required: true, trim: true},
    userType:{ type:String, required: true, trim: true},
    activeFlag: { type:String, required: true, trim: true}
    

}, {timestamps: true})


module.exports  = model('Computer', computerSchema)