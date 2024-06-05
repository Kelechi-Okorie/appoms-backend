const express = require('express');

const { getAllAppointments } = require('../controllers/appointment/index.controller.js');
const { getAllServices } = require('../controllers/service/index.controller.js');
const { getAllReviews } = require('../controllers/review/index.controller.js');
const { getAllProjects } = require('../controllers/project/index.controller.js');
const { getAllMessages } = require('../controllers/message/index.controller.js');

const utilsRoute = express.Router();

utilsRoute.get('/api/user/appointment', getAllAppointments);
utilsRoute.get('/api/user/review', getAllReviews);
utilsRoute.get('/api/user/service', getAllServices);
utilsRoute.get('/api/user/project', getAllProjects);
utilsRoute.get('/api/user/message', getAllMessages);

module.exports = utilsRoute;
