const express = require('express');
const router = express.Router();
var multer  = require('multer');
var upload = multer({ dest: './uploads/' });

const {
	getAllCategory,
	addCategory,
	getCategoryById,
} = require('../controllers/category');

router.get('/allCategory', getAllCategory);

router.get('/category/:categoryId', getCategoryById);

router.post('/addCategory', upload.single('logo'), addCategory);

module.exports = router;
