const express = require('express');
const router = express.Router();

const profileRoute = require('./user/profile.route');
const userIndex = require('./user/index.route');
const registerRoute = require('./auth/register.route');
const loginRoute = require('./auth/login.route');

router.use('/auth', registerRoute, loginRoute);
router.use('/users', userIndex, profileRoute);

module.exports = router;
