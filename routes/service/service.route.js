const express = require("express");
var router = express.Router();

const { createService } = require("../../controllers/service/service.controller");

//route to create service
/**
 * @swagger
 * /api/v1/service:
 *  post:
 *    summary: User service creation
 *    security:
 *      - Authorization: []
 *    description: Create User service
 *    tags:
 *      - Services
 *    responses:
 *      '200':
 *        description: User service created
 *      '404':
 *        description: User service not created
 *      '500':
 *        description: Unable to create user services
 */
router.post("/service", createService);

module.exports = router
