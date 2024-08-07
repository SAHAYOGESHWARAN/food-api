const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ success: true, message: 'Test route works!' });
});

router.get('/test-user', (req, res) => {
    res.status(200).json({ success: true, message: 'Test user route works!' });
});

module.exports = router;
