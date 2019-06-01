const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SpaceSchema = new Schema({
  description : String,
  guests: Number,
  beds: Number,
  bedrooms: Number
})

const AmenitiesSchema = new Schema({
  wifi: Boolean,
  tv: Boolean,
  aircon: Boolean,
  heating: Boolean,
  kitchen: Boolean
})

const BookingSchema = new Schema({
  id: String,
  checkin: Date,
  checkout: Date
})

const AddressSchema = new Schema({
  country: String,
  city: String,
  street: String,
  number: Number,
  lat: Number,
  lng: Number
})

const OwnerSchema = new Schema({
  imageUrl: String,
  name: String
})


const ReviewSchema = new Schema({
  id: String,
  title: String,
  rating: Number,
  date: Date,
  content: String,
  userImgUrl: String,
  username: String
})

const homeSchema = new Schema({
  title: String,
  type: String,
  imgUrl: String,
  generalDesc: String,
  price: String,
  theSpace: SpaceSchema,
  amenities: [String],
  bookings: [BookingSchema],
  address: AddressSchema,
  owner: OwnerSchema,
  reviews: [ReviewSchema],
  similarHomes: [String]
})

const homeModel = mongoose.model('home', homeSchema)

module.exports = homeModel