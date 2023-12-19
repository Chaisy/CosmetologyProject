const Router = require('express')
const router = Router()
const placementController = require('../controllers/placementController')

router.get('/', placementController.getAll)
router.get('/:id', placementController.get)

module.exports = router