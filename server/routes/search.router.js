const express = require('express')
const router = express.Router()

const homeModel = require('../models/home.model')

router.get('/' , async (req,res) => {
  let { location } = req.query
  location = location.toLowerCase()
  const homes = await homeModel.find({ 'address.city': location })

  res.status(200).json(homes)
})

module.exports = router
