const express = require('express')
const router = express.Router()

const restController = require('../controllers/restController')
const adminController = require('../controllers/adminController')
const userController = require('../controllers/userController')

router.get('/', (req, res) => res.redirect('/restaurants'))
router.get('/admin', (req, res) => res.redirect('/admin/restaurants'))

router.get('/restaurants', restController.getRestaurants)

router.get('/admin/restaurants', adminController.getRestaurants)

router.get('/signup', userController.signUpPage)
router.post('/signup', userController.signUp)

module.exports = router
