const router = require('express').Router()
const {auth} = require('../middlewares/auth')

// EndPoint : /campus/auth
router.use('/auth', require('./auth'))

// EndPoint : /campus/documents
router.use('/documents', require('./documents'))


//check authentication
router.use(auth)

// EndPoint : /campus/users
router.use('/users', require('./user'))


// EndPoint : /campus/inventory/computers
router.use('/inventory/computers', require('./computer'))

// EndPoint : /campus/inventory/monitors
router.use('/inventory/monitors', require('./monitor') )

module.exports = router;


