const express = require('express');
// /api/auth
const {register} = require('../controllers/auth')

const router = express.Router();


router.post("/register",register);

module.exports = router;