const Router = require('express')
const router = new Router()
const brandRouter = require('./brandRouter')
const itemRouter = require('./itemRouter')
const sizeRouter = require('./sizeRouter')
const typeRouter = require('./typeRouter')
const userRouter = require('./userRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/size', sizeRouter)
router.use('/item', itemRouter)

module.exports = router
