const mongoose = require('mongoose');

const hotelFormSchema = new mongoose.Schema({
  nomHotel: {
    type: String,
    required: true,
    trim: true
  },
  adresse: {
    type: String,
    required: true,
    trim: true
  },
  ville: {
    type: String,
    required: true,
    trim: true
  },
  pays: {
    type: String,
    required: true,
    trim: true
  },
  telephone: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  nombreEtoiles: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  styles: {
    type: [String],
    required: true
  },
  fonctionnalitesRequises: {
    type: [String],
    required: true
  },
  nombreChambres: {
    type: Number,
    required: true
  },
  typesChambres: {
    type: [String],
    required: true
  },
  servicesSupplementaires: {
    type: [String]
  },
  informationsRestaurant: {
    type: String,
    trim: true
  },
  informationsSpaBienEtre: {
    type: String,
    trim: true
  },
  budget: {
    type: String,
    required: true,
    trim: true
  },
  delai: {
    type: String,
    required: true,
    trim: true
  },
  commentairesSupplementaires: {
    type: String,
    trim: true
  },
  nomContact: {
    type: String,
    required: true,
    trim: true
  },
  emailContact: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  telephoneContact: {
    type: String,
    required: true,
    trim: true
  },
  dateCreation: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('HotelForm', hotelFormSchema); 