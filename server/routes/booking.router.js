const express = require('express')
const router = express.Router()

const homeModel = require('../models/home.model')

const occupiedRoom = (firstBooking, secondBooking) => {
  firstCheckin = new Date(firstBooking.checkin)
  firstCheckout = new Date(firstBooking.checkout)
  
  secondCheckin = new Date(secondBooking.checkin)
  secondCheckout = new Date(secondBooking.checkout)
  return firstCheckin < secondCheckout && firstCheckout > secondCheckin
}

router.get('/:id/' , async (req,res) => {
  const {checkin, checkout} = req.query
  const tempBooking = {checkin, checkout}
  const home = await homeModel.findOneAndUpdate(req.params.id)
  for(currentBooking of home.bookings){
    if (occupiedRoom(currentBooking, tempBooking)){
      return res.status(200).json({isOccupied: true})
    } 
  }
  
  home.bookings.push(tempBooking)
  await home.save((err, body) => {
    if(err) console.log("err", err)
  })
  res.status(200).json({isOccupied: false})
})

module.exports = router