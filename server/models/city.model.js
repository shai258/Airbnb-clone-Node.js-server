const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CitySchema = new Schema({
  id: String,
  city: String,
  imgUrl: String,
  avgPrice: Number
})

const cityModel = mongoose.model('city', CitySchema)

module.exports = cityModel