const router = require('express').Router();
const monitorCtrl = require('../controllers/monitor');
const {isStaffOrAdmin} = require('../middlewares/auth')


router.use(isStaffOrAdmin)


router
.route('/')
.get(monitorCtrl.list)
.post(monitorCtrl.create)


router.route('/:id')
.get(monitorCtrl.read)
.put(monitorCtrl.update)
.patch(monitorCtrl.update)
.delete(monitorCtrl.delete)

router.route('/tagNumber/:tagNumber')
.get(monitorCtrl.read)
.put(monitorCtrl.update)
.delete(monitorCtrl.delete)

router.route('/activeFlag/:activeFlag')
.get(monitorCtrl.read)

module.exports = router;