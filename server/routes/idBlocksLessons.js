var express = require('express');
var router = express.Router();
const Lesson = require('../model/Lesson')
const Config = require('../config')

router.get('/:_id', (req, res) => {
console.log('id получен:'+req.params._id)
Lesson.find({_id:req.params._id})
.then(lesson=>{
    console.log(lesson)
    res.send(lesson)})
.catch(e=>console.error(e))
res.setHeader('access-control-allow-origin', `http://localhost:${Config.Port}`)
})

module.exports = router;
