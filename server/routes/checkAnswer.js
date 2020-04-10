var express = require('express');
const Lesson = require('../model/Lesson')
var router = express.Router();


router.post('/', (req, res) => {
    const result = req.body.result
    for (var key in result) {
    Lesson.findOne({})
    .then(lesson=>{
        console.log(lesson)})
    .catch(e=>console.error(e))
    }
    res.status(200)
    res.send('ok')
})
module.exports = router;
