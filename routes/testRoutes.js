const express = require('express');
const {testUserController} = require("../controllers/testController")

//router object
const router = express.Router()

// routes Get | post | update |delete
router.get('/ test - user',testUserController)