const Monitor = require('../models/Monitor');

// URL GET + /inventory/monitors
exports.list = async(req, res)=>{
    const data = await Monitor.find({})
    res.status(200).json({
        success:true, 
        count: data.length,
        data, 
    
    })

}

// URL POST + /inventory/monitors
exports.create = async(req, res)=>{
    const data = await Monitor.create(req.body);

    res.status(201).json({
        success:true, 
        data
    })
}

// URL GET + /inventory/monitors/:id
exports.read = async(req, res)=>{
    const data = await Monitor.findById(req.params.id)
    res.status(200).json({
        success:true, 
        data
    })
}

// URL PUT + /inventory/c/:id
exports.update = async(req, res)=>{
    const data = await Monitor.findByIdAndUpdate(req.params.id, req.body)
    res.status(202).json({
        success:true, 
        data
    })

}

// URL DELETE + /inventory/monitors/:id
exports.delete = async(req, res)=>{
    const data = await Monitor.deleteOne({_id:req.params.id})
    res.status(data.deletedCount ? 204: 404).json({
        success: data.deletedCount? true: false, 
       
    })
}

// URL GET + /inventory/monitors/tagNumber/:tagNumber
exports.read = async(req, res)=>{
    const data = await Monitor.findOne({tagNumber : req.params.tagNumber})
    res.status(200).json({
        success:true, 
        data
    })
}

// URL PUT + /inventory/monitors/tagNumber/:tagNumber
exports.update = async(req, res)=>{
    const data = await Monitor.findOneAndUpdate(req.params.tagNumber, req.body)
    res.status(202).json({
        success:true, 
        data
    })

}

// URL DELETE + /inventory/monitors/tag/:tagNumber
exports.delete = async(req, res)=>{
    const data = await Monitor.deleteOne({tagNumber : req.params.tagNumber})
    res.status(data.deletedCount ? 204: 404).json({
        success: data.deletedCount? true: false, 
       
    })
}

// URL GET + /inventory/monitors/activeFlag/:activeflag
exports.read = async(req, res)=>{
    const data = await Monitor.find({activeFlag : req.params.activeFlag})
    console.log("123")
    res.status(200).json({
        success:true, 
        data
    })
}

