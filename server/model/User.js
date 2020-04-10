const Mongoose = require('mongoose')
const Schema = Mongoose.Schema;

const schema = new Schema({
    Access_Token: {
        type: String,
        required: false,
        minlength: 3
    },
    First_Name: {
        type: String,
        required: true,
        minlength: 3
    },
    Last_Name: {
        type: String,
        required: true,
        minlength: 3
    },
    Role: { // Администратор или нет 
        type: Boolean,
        required: true,
        default: false
    },
    Login: {
        type: String,
        required: true,
        minlength: 3
    },
    Password: {
        type: String,
        required: true,
        minlength: 3
    },
    Position: { //Должность  
        type: String,
        required: false,
    },
    Actual: { //Работает сотрудник или уволен
        type: Boolean,
        required: true,
        default: true
    },
    Result:{
        type: Number,
        required:true,
        default:0 
    }
})


module.exports = Mongoose.model('Users', schema)