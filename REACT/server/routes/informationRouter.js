const Router = require('express')
const router = Router()
const informationController = require('../controllers/informationController')

router.get('/', informationController.getAll)
router.get('/:id', informationController.get)

module.exports = router