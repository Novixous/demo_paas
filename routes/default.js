const express = require('express');
const router = express.Router();

//default route
router.get('/', (req, res) => {
    res.send('this is the default route');
})


module.exports = router;