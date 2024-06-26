const router = require('express').Router();
const computerCtrl = require('../controllers/computer');
const {isStaffOrAdmin} = require('../middlewares/auth')


router.use(isStaffOrAdmin)


router
.route('/')
.get(computerCtrl.list)
.post(computerCtrl.create)


router.route('/:id')
.get(computerCtrl.read)
.put(computerCtrl.update)
.patch(computerCtrl.update)
.delete(computerCtrl.delete)

router.route('/tagNumber/:tagNumber')
.get(computerCtrl.read)
.put(computerCtrl.update)
.delete(computerCtrl.delete)


router.route('/activeFlag/:activeFlag')
.get(computerCtrl.read)
module.exports = router;