var express = require('express');
var router = express.Router();
const Lesson = require('../model/Lesson')
const Config = require('../config')
router.get('/:_id', (req, res) => {
    Lesson.find({Blocks:{$elemMatch:{_id:req.params._id}}})
.then(lesson=>{ 
    lesson.forEach(element => {
        console.log(element.Blocks)
        const Blocks= element.Blocks
        let Block = Blocks.find(item => item._id == req.params._id);
        res.send(Block)
    });
   
})
.catch(e=>console.error(e))
res.setHeader('access-control-allow-origin', `http://localhost:${Config.Port}`)
})
 
module.exports = router;
