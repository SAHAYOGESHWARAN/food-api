const express = require('express')
const { registerController } = require('../controllers/authControllers')

const router = express.router()

//routes
//REGISTER || POST

router.post('/register',registerController)
module.exports = router