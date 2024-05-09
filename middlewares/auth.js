const User = require('../models/User');
const ErrorResponse = require('../utils/ErrorResponse');
const {verify} = require('../utils/generateToken')

//Authentication

exports.auth = async (req, res, next)=>{
    const auth = req.headers?.authorization || null;
    const accessToken = auth? auth.split(' ')[1]:null; //because Bearer should be included
    const userData = await verify(accessToken);
    const user = await User.findById(userData.userId);
    //attach the user information 
    req.user = user;
    //Add created ID for all req.body

    req.body.createdID = req.user?._Id;
    next();
};

// Authorization
exports.isLogin = (req, res, next) =>{
    if (req.user) return next()
    throw new ErrorResponse(403, 'Login First!')    
}

exports.isAdmin = (req, res, next)=>{
    if(req.user.isAdmin) return next();
    throw new ErrorResponse(403, 'You must login as admin') 
}

exports.isStaffOrAdmin = (req, res, next)=>{
    if(req.user.isAdmin || req.us.isStaff) return next();
    throw new ErrorResponse(403, 'You must login as staff or admin') 
}
