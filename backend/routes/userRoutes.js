const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { loginUser, getUsers } = require('../controllers/userController');
const { protect } = require('../middlewares/authMiddleware');

router.post('/login', loginUser);
router.get('/', protect, getUsers);

module.exports = router;
