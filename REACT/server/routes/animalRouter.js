const Router = require('express')
const router = Router()
const animalController = require('../controllers/animalController')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/', animalController.getAll)
router.get('/by', animalController.getByName)
router.get('/time', authMiddleware, animalController.getTime)
router.get('/:id', animalController.get)
router.post('/', authMiddleware, animalController.create)
router.put('/:id', authMiddleware, animalController.edit)
router.delete('/:id', authMiddleware, animalController.delete)

module.exports = router