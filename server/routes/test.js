var express = require('express');
const Config = require('../config')
var router = express.Router();

/* GET users listing. */
router.route('/')
   .get((req, res) => {
       res.send('ok')

   })
   .post((req, res) => {
       let users={
           login:'admin',
           pass:'qwes'
       }
       res.writeHead("Access-Control-Allow-Origin", "*")            
       
    res.json(JSON.stringify(users))
   })

module.exports = router;
