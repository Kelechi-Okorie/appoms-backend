const express = require('express');
const router = express.Router();

const profileRoute = require('./user/profile.route');
const userIndex = require('./user/index.route');

router.use('/users', userIndex, profileRoute);

module.exports = router;
