var express = require('express')
var router = express.Router()
const User = require('../model/User')
const Config = require('../config')
const jwt = require('jsonwebtoken');
/* GET users listing. */
router.route('/')
    .get((req, res) => {

    })
    .post((req, res) => {
        const response = req.body.guest
        var obj = response;
        console.log(response)
        User.find({ $and: [{ Login: obj.login }, { Password: obj.password }] })
            .then(result => {
                if(result==''){
                    res.status(400)
                    res.send('Ошибка пользователь не зарегистрирован')
                }
                else{
                    let token = jwt.sign(
                        {
                            id: result._id
                        },
                        Config.Secret,
                        {
                            expiresIn: 86400 // expires in 24 hours
                        });
    
                    const request = {
                        token: token,
                        user:result
                    }

                    User.updateOne({ Login: result[0].Login }, { Access_Token:request.token })
                    .then(up => {   
                        console.log("Для пользователя " + result + "Был сгенерирован токен " + request.token+" Изменение "+JSON.stringify(up))
                        
                        res.setHeader('access-control-allow-origin', `http://localhost:${Config.Port}`)
                        res.send(JSON.stringify(request));
                    })
                    .catch(e => { console.error(e) })
                }               
            })
            .catch(e => console.error(e))

    })


module.exports = router;
