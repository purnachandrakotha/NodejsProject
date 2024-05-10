const Computer = require('../models/computer');

// URL GET + /inventory/computers
exports.list = async(req, res)=>{
    const data = await Computer.find({})
    res.status(200).json({
        success:true, 
        count: data.length,
        data, 
    
    })

}

// URL POST + /inventory/computers
exports.create = async(req, res)=>{
    const data = await Computer.create(req.body);

    res.status(201).json({
        success:true, 
        data
    })
}

// URL GET + /inventory/computers/:id
exports.read = async(req, res)=>{
    const data = await Computer.findById(req.params.id)
    res.status(200).json({
        success:true, 
        data
    })
}

// URL PUT + /inventory/computers/:id
exports.update = async(req, res)=>{
    const data = await Computer.findByIdAndUpdate(req.params.id, req.body)
    res.status(202).json({
        success:true, 
        data
    })

}

// URL DELETE + /inventory/computers/:id
exports.delete = async(req, res)=>{
    const data = await Computer.deleteOne({_id:req.params.id})
    res.status(data.deletedCount ? 204: 404).json({
        success: data.deletedCount? true: false, 
       
    })
}

// URL GET + /inventory/computers/tagNumber/:tagNumber
exports.read = async(req, res)=>{
    const data = await Computer.findOne({tagNumber : req.params.tagNumber})
    res.status(200).json({
        success:true, 
        data
    })
}

// URL PUT + /inventory/computers/tagNumber/:tagNumber
exports.update = async(req, res)=>{
    const data = await Computer.findOneAndUpdate(req.params.tagNumber, req.body)
    res.status(202).json({
        success:true, 
        data
    })

}

// URL DELETE + /inventory/computers/tagNumber/:tagNumber
exports.delete = async(req, res)=>{
    const data = await Computer.deleteOne({tagNumber : req.params.tagNumber})
    res.status(data.deletedCount ? 204: 404).json({
        success: data.deletedCount? true: false, 
       
    })
}

// URL GET + /inventory/computers/activeFlag/:activeflag
exports.read = async(req, res)=>{
    const data = await Computer.find({activeFlag : req.params.activeFlag})
    console.log("123")
    res.status(200).json({
        success:true, 
        data
    })
}

