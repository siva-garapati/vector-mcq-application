const Assesment = require("../models/Assesment")
const {v4:uuid} = require('uuid')

const addAssesment = async(req,res) =>{
    try{
        console.log(req.body)
        let {title, questions} = req.body

        let questionsArray = questions.map((question)=>{
            return {...question, _id:uuid()}
        })

        const newAssesment = new Assesment({
            _id:uuid(),
            title,
            questionsArray
        })

        await newAssesment.save()
        res.json({'message':'Assesment created'})
    }
    catch(err){
        console.log(`error in addAssesment ${err.message}`)
        res.json({'message':'error in adding assesment'})
    }
}

const getAssesment = async(req,res)=>{
    try{
        const assesment = await Assesment.findById(req.params.id)
        // console.log(assesment)
        res.json({assesment})
    }
    catch(err){
        console.log(`error in getAssesment ${err.message}`)
        res.json({'message':'error in fetching assesment'})
    }
}

module.exports = {addAssesment, getAssesment}