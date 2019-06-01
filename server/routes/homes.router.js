const express = require('express')
const router = express.Router()

const homeModel = require('../models/home.model')

router.get('/' , async (req,res) => {
  const homes = await homeModel.find()
  res.status(200).json(homes)
})

router.get('/:id', async (req,res) => {
  const home = await homeModel.findByIdAndUpdate(req.params.id)
  res.status(200).json(home)
})

module.exports = router