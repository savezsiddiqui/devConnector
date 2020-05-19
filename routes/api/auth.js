const express = require('express');
const router = express.Router();

// @route   GET api/auth
// @desc    register user
//@access   public
     
router.post('/', (req, res) => {
    console.log(req.body);
    res.send('user route');
});

module.exports = router;