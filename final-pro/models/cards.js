const mongoose = require('mongoose');
const Schema = mongoose.Schema;

cardSchema = new Schema( {
	cardId: Number,
	cardName: String,
	cardUrls: Object,
	isSpecial: Boolean	
}),
Card = mongoose.model('Card', cardSchema, 'Game');

module.exports = Card;
