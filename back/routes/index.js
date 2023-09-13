import express from 'express'
import users from './users_route.js'
import licenses from './licenses_route.js'

const router = express.Router()
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

router.use('/user', users)
router.use('/license', licenses)

export default router
