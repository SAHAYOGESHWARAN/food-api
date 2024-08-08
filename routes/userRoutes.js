const express = require('express');
const { getUserController } = require('../controllers/userControllers');

const router = express.Router();

//routes
//GET USER || GET
router.get('/gstUser',getUserController)

module.exports = router;
