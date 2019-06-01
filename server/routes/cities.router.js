const express = require('express')
const router = express.Router()

const cityModel = require('../models/city.model')

router.get('/' , async (req,res) => {
  const cities = await cityModel.find()
  res.status(200).json(cities)
})

module.exports = router
