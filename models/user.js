const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		maxlength: 32,
		trim: true,
	},
	email: {
		type: String,
		unique: true,
		trim: true,
	},
	phoneNumber: {
		type: String,
		required: true,
		trim: true,
	},
	role: {
		type: String,
		required: true,
		trim: true,
	}
});

module.exports = mongoose.model('User', userSchema);
