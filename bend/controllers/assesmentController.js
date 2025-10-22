const Assesment = require("../models/Assesment");
const { v4: uuid } = require("uuid");
const Result = require("../models/Result");

const addAssesment = async (req, res) => {
  try {
    console.log(req.body);
    let { title, questions } = req.body;

    let questionsArray = questions.map((question) => {
      return { ...question, _id: uuid() };
    });

    const newAssesment = new Assesment({
      _id: uuid(),
      title,
      questionsArray,
    });

    await newAssesment.save();
    res.json({ message: "Assesment created" });
  } catch (err) {
    console.log(`error in addAssesment ${err.message}`);
    res.json({ message: "error in adding assesment" });
  }
};

const getAssesment = async (req, res) => {
  try {

    const {userId, assesmentId} = req.body

    const result = await Result.find({userId, assesmentId})

    console.log(result)

    if (result?.length>0){
      return res.json({message:'already submitted'})
    }

    const assesment = await Assesment.findById(assesmentId);
    // console.log(assesment)
    res.json({ assesment });
  } catch (err) {
    console.log(`error in getAssesment ${err.message}`);
    res.json({ message: "error in fetching assesment" });
  }
};

const evaluate = async(req, res) => {
  try {
    const { userId, assesmentId, choosenOptions } = req.body;

    //evaluation
    const {questionsArray} = await Assesment.findById(assesmentId, {questionsArray:1, _id:0})

    let score = 0;

    const correctAnswers = {}

    questionsArray.forEach(question => {
        if(question.answer == choosenOptions[question._id]){
            score++;
        }
        correctAnswers[question._id]=question.answer
    });

    console.log(userId, score)

    const result = new Result({
      assesmentId,
      userId,
      score
    })

    await result.save()

    res.json({
        score,
        correctAnswers
    })
  } catch (err) {
    console.log(`error in evaluate ${err.message}`);
    res.json({ message: "error in evaluating results" });
  }
};

module.exports = { addAssesment, getAssesment, evaluate };