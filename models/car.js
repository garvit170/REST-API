const mongoose = require('mongoose');

//Movie schema description
const CarSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,		
		required: true,
	},
	maker: {
		type: String,
		trim: true,
		required: true
	}
});

module.exports = mongoose.model('Car', CarSchema);