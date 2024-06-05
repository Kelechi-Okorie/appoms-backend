const express = require("express");
var router = express.Router();

const { createAppointment } = require("../../controllers/appointment/appointment.controller");

//route to register appointments
/**
 * @swagger
 * /api/v1/appointment:
 *  post:
 *    summary: User appointment creation
 *    security:
 *      - Authorization: []
 *    description: Reister appointments
 *    tags:
 *      - Appointments
 *    responses:
 *      '200':
 *        description: User appointment registered
 *      '404':
 *        description: Appointment failed to register
 *      '500':
 *        description: Unable to register appointments
 */
router.post("/appointment", createAppointment);

module.exports = router
