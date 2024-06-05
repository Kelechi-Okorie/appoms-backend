const express = require('express');
const router = express.Router();

const profileRoute = require('./user/profile.route');
const userIndex = require('./user/index.route');
const registerRoute = require('./auth/register.route');
const loginRoute = require('./auth/login.route');
const messageRoute = require('./message/index.route');
const messageIndex = require('./message/message.route');
const appointmentIndex = require('./appointment/index.route');
const appointmentRoute = require('./appointment/appointment.route');
const projectRoute = require('./project/index.route');
const projectIndex = require('./project/project.route');
const serviceRoute = require('./service/index.route');
const serviceIndex = require('./service/service.route');
const reviewRoute = require('./review/index.route');
const reviewIndex = require('./review/review.route');

router.use('/auth', registerRoute, loginRoute);
router.use('/users', userIndex, profileRoute);
router.use('/users/messages', messageRoute, messageIndex);
router.use('/users/appointments', appointmentRoute, appointmentIndex);
router.use('/users/projects', projectRoute, projectIndex);
router.use('/users/services', serviceRoute, serviceIndex);
router.use('/users/reviews', reviewRoute, reviewIndex);

module.exports = router;
