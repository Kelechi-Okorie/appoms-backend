const express = require('express');
const router = express.Router();

const profileRoute = require('./user/profile.route');
const userIndex = require('./user/index.route');
const registerRoute = require('./auth/register.route');
const loginRoute = require('./auth/login.route');
const messageRoute = require('./message/index.route');
const appointmentRoute = require('./appointment/index.route');
const projectRoute = require('./project/index.route');
const serviceRoute = require('./service/index.route');
const reviewRoute = require('./review/index.route');
const categoryRoute = require('./category/index.route');

router.use('/auth', registerRoute, loginRoute);
router.use('/users', userIndex, profileRoute);
router.use('/users/messages', messageRoute);
router.use('/users/appointments', appointmentRoute);
router.use('/users/projects', projectRoute);
router.use('/users/services', serviceRoute);
router.use('/users/reviews', reviewRoute);

router.use('/categories', categoryRoute);

module.exports = router;
