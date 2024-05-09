const router = require('express').Router();


router.all('/', (req, res)=>{
    res.json({
        swagger:'/campus/documents/swagger',
        redoc: '/campus/documents/redoc',
        json: '/campus/documents/json'
    })
})

router.all('/json', (req, res)=>{
    res.sendFile('/config/swagger.json', {root:'.'})
})

// Swagger
const swaggerUi = require('swagger-ui-express');
router.use('/swagger', swaggerUi.serve, swaggerUi.setup(require('../config/swagger.json')))

// redoc
const redoc = require('redoc-express')
router.get('/redoc', redoc({specUrl:'/campus/documents/json', title:'API Documents'}))


module.exports = router;