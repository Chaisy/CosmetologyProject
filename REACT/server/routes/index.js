const Router = require('express')
const router = Router()

const userRouter = require('./userRouter')
const animalRouter = require('./animalRouter')
const informationRouter = require('./informationRouter')
const placementRouter = require('./placementRouter')

router.use('/user', userRouter)
router.use('/animal', animalRouter)
router.use('/information', informationRouter)
router.use('/placement', placementRouter)

module.exports = router