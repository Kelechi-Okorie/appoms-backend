const express = require("express");
var router = express.Router();

const { getAllServices } = require("../../controllers/service/index.controller");

//route to fetch services
/**
 * @swagger
 * /api/v1/services:
 *  get:
 *    summary: User service Details
 *    security:
 *      - Authorization: []
 *    description: Get User services
 *    tags:
 *      - Services
 *    responses:
 *      '200':
 *        description: User services fetched
 *      '404':
 *        description: User services not found
 *      '500':
 *        description: Unable to fetch user services
 */
router.get("/service", getAllServices);

module.exports = router
