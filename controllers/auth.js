const {generate, verify} = require('../utils/generateToken');
const User = require('../models/User')
const ErrorResponse = require('../utils/ErrorResponse')

// url: /auth/login
exports.login = async (req, res) => {

    const {username , password} = req.body
    if (!(username && password))
        throw new ErrorResponse(401, 'Please Enter Username or password')
    //get the user information
    const user = await User.findOne({username})
    // No User with That Username
    if (!user) throw new ErrorResponse(401, 'Wrong username or password')
     //check password
    const isMatch = await user.matchPassword(password)   
     // incorrect password
     if (!isMatch) throw new ErrorResponse(401, 'Wrong username or password')
    // check if the account is active
     if (! user.isActive) throw new ErrorResponse(401, 'Account is not Active')

        res.status(200).json({
            success : true,
            token  : generate({userId  : user._id})
        })

}

// url: /auth/logout
exports.logout = (req, res) => {
    res.status(200).json({
        success : true,
        message : "No Action needed to logout. Delete the token from your browser data"
    })


}