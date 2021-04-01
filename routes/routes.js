const express = require('express')
const router = express.Router()

const restController = require('../controllers/restController')
const adminController = require('../controllers/adminController')

router.get('/', (req, res) => res.redirect('/restaurants'))
router.get('/admin', (req, res) => res.redirect('/admin/restaurants'))

router.get('/restaurants', restController.getRestaurants)

router.get('/admin/restaurants', adminController.getRestaurants)

module.exports = router
