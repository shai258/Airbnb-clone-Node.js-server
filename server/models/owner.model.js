const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ownerSchema = new Schema({
  imgURL: URL,
  name: String
})

const ownerModel = mongoose.model('home', ownerSchema)

module.exports = ownerModel