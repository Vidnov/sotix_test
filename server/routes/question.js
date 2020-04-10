var express = require('express')
var router = express.Router()

/* GET users listing. */
router.route('/')
    .get((req, res) => {

    })
    .post((req, res) => {
        console.log('post request ok')
    })


module.exports = router;
