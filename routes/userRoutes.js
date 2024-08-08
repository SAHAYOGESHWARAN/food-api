const express = require('express');
const { getUserController } = require('../controllers/userControllers');

const router = express.Router();

//routes
//GET USER || GET
router.get('/getUser',getUserController)

module.exports = router;
