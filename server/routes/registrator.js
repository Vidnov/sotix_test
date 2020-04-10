var express = require('express');
var router = express.Router();
const User = require('../model/User')
const Config = require('../config')
/* GET users listing. */
router.route('/')
   .get((req, res) => {
   })
   .post((req, res) => {
      
      const { login, password, first_name, last_name } = req.body.User

      User.find({ "Login": login })
         .then(response => {
            if (response == '') {
               User.create({
                  First_Name:first_name,
                  Last_Name:last_name,
                  Login:login,
                  Password: password
               })
                  .then(result => {
                     console.log("Создан новый пользователь" + result)
                     res.setHeader('access-control-allow-origin', `http://localhost:${Config.Port}`)
                     res.send("Создан новый пользователь" + result)

                  })
                  .catch(e => {
                     console.error(e)
                     res.setHeader('access-control-allow-origin', `http://localhost:${Config.Port}`)
                     res.send('Ошибка')
                  })
            }
            else {
               console.log("Пользователь найден " + response)
               res.setHeader('access-control-allow-origin', `http://localhost:${Config.Port}`)
               res.send("Пользователь с данным логином уже существует")

            }

         })
         .catch(e => {
            console.error(e)
         })
   })

module.exports = router;
