const express = require('express');
const router = express.Router();
var multer  = require('multer')
var upload = multer({ dest: './uploads/' })

const {
	getQuestionByCategory,
	getCategoryById,
	addQuestionByCategory,
} = require('../controllers/question');

router.param('categoryId', getCategoryById);

router.get('/get/:categoryId', getQuestionByCategory);

router.post('/add/:categoryId', upload.single('image'), addQuestionByCategory);

module.exports = router;
