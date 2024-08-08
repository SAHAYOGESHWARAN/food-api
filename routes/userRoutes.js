const express = require('express');
const { getUserController, updateUserController } = require('../controllers/userControllers');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

//routes
//GET USER || GET
router.get('/getUser',authMiddleware,getUserController)


//UPDATE PROFILE
router.put('/updateProfile', authMiddleware, updateUserController)

module.exports = router;
