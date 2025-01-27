const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const categorySchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		logo: {
			type: String,
		},
		bgColor: {
			type: String,
			required: true
		},
		user: {
			type: ObjectId,
			ref: 'User',
		},
	},
	{ timestamps: true },
);

module.exports = mongoose.model('Category', categorySchema);
