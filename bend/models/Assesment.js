const mongoose = require('mongoose')

const AssesmentSchema = new mongoose.Schema({
    _id:{
        type:String,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    questionsArray:[
        {
            _id:{
                type:String,
                require:true
            },
            question:String,
            options:[{type:String}],
            answer:Number
        }
    ]
})

module.exports = new mongoose.model('assesments', AssesmentSchema)