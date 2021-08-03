const express = require('express');
const router = express.Router();

const {
	getUserByPhonenumber,
	registerUser
} = require('../controllers/user');

router.get('/user/:phoneNumber', getUserByPhonenumber);
router.post('/registerUser', registerUser);

module.exports = router;