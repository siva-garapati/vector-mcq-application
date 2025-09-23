const express = require('express')
const { addAssesment, getAssesment } = require('../controllers/assesmentController')

const router = new express.Router()

router.post('/add',addAssesment)
router.get('/get/:id',getAssesment)

module.exports = router