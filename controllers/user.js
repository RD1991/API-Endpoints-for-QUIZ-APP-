const User = require('../models/user');

exports.getUserByPhonenumber = (req, res) => {
	User.find({ phoneNumber: req.params.phoneNumber }, (error, result) => {
		if (error) {
			return res.status(400).json({
				error: 'Error in finding the User',
			});
		}
		return res.status(200).json({
			user: result,
		});
	});
};


//desc : add new User
//type : POST
exports.registerUser = (req, res) => {
	new User(req.body).save((error, result) => {
		if (error) {
			return res.status(400).json({
				error: 'Error in adding User',
			});
		}
		return res.status(200).json({
			message: `${req.body.name} Added to User`,
		});
	});
};
