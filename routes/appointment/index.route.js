const express = require("express");
var router = express.Router();

const { getAllAppointments } = require("../../controllers/appointment/index.controller");

//route to fetch user appointments
/**
 * @swagger
 * /api/v1/appointments:
 *  get:
 *    summary: User appointments
 *    security:
 *      - Authorization: []
 *    description: Get User profile details
 *    tags:
 *      - Appointments
 *    responses:
 *      '200':
 *        description: User appointments fetched
 *      '404':
 *        description: Appointments not found
 *      '500':
 *        description: Unable to fetch user appointments
 */
router.get("/", getAllAppointments);

module.exports = router
