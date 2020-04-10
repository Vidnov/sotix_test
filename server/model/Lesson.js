const Mongoose = require('mongoose')
const Schema = Mongoose.Schema;

const ValueBlock = new Schema({
    typeBlock: {
        type: Boolean,
        required: true,
        default: true
    },
    NameVideo: {
        type: String,
    },
    UrlVideo: {
        type: String,
    },
    NameTestBlock: {
        type: String,
    },
    Test: [
        {
            typeTest:{
                type:Boolean
            },
            Question: {
                type: String
            },
            Answer: [
                {   
                    // textAnswer:{
                    //     type: String
                    // }
                    type:String
                }
            ],
            True_Question: {
                type: String
            }

        }]

})

const schema = new Schema({
    Title: {
        type: String,
        required: true,
    },
    Text: {
        type: String,
        required: true
    },
    Src:{
        type: String,
        required: true
    },
    Blocks: [
        ValueBlock
    ],
    Exam:
        {
            ExamQuestion:[
                {type:String}
            ]
        }
})




module.exports = Mongoose.model('Lesson', schema)


