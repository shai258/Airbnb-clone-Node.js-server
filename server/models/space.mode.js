const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SpaceModel = new Schema({
  description : String,
  guests: Number,
  beds: Number,
  bedrooms: Number
})

const spaceModel = mongoose.model('home', SpaceModel)

module.exports = spaceModel


/*

theSpace: {
        description,
        guests:4,
        beds:1,
        bedrooms:1
    }

  const mongoose = require('mongoose')
  const Schema = mongoose.Schema

  const homeSchema = new Schema({
    title: String,
    type: String,
    generalDesc: String,
    price: String,
    //TODO: theSpaceSchema
    theSpace: { type: Object },
    //TODO: amenitiesSchema
    amenities: {type: Array},
    //TODO: bookingSchema
    bookings: {}, //TODO: I have no idea,
    //TODO: addressSchema
    address: {type: Object},
    //TODO: ownerSchema
    owner: {type: Object},
    //TODO: reviewsSchema
    reviews: {}, //TODO:No idea
    //TODO: similerHomesSchema
    similiarHomes: {type: Array} 
  })

  const homeModel = mongoose.model('home', homeSchema)

  module.exports = homeModel

*/



