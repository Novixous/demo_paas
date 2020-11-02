const express = require('express');
const router = express.Router();

//welcome route

router.get('/', (req, res) => {
    res.send('Welcome to my api haha');
})

module.exports = router;