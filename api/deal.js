const express = require('express');
const router = express.Router();

router.post('/deal', (req, res) => {
    res.send('From Deal');
})

module.exports = router;