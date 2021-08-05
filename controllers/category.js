const Category = require('../models/category');

//desc : Get All Categories
//type : GET
exports.getAllCategory = (req, res) => {
	Category.find({}, (error, result) => {
		if (error) {
			return res.status(400).json({
				error: 'Unable to fetch All Categories ...',
			});
		}
		return res.status(200).json({
			categories: result,
		});
	});
};

//desc : add category
//type : POST
exports.addCategory = (req, res) => {
	if (('file' in req) && (req.file != null)) {
		req.body['logo'] = req.file.path;
	}

	new Category(req.body).save((error, result) => {
		if (error) {
			return res.status(400).json({
				error: 'Error in adding category',
			});
		}
		return res.status(200).json({
			message: 'Category Added Successfully',
		});
	});
};


exports.getCategoryById = (req, res) => {
	// console.log(req.params);
	Category.find({ _id: req.params.categoryId }, (error, result) => {
		if (error) {
			return res.status(400).json({
				error: 'Error in finding the Cateogry',
			});
		}
		return res.status(200).json({
			category: result,
		});
	});
};
