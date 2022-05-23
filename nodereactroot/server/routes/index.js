const Router = require('express')
const router = new Router()

const userRouter = require('./userRouter')
const personRouter = require('./personRouter')

router.use('/person',personRouter)
router.use('/user',userRouter)


module.exports = router