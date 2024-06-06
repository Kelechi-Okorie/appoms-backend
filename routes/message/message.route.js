const express = require("express");
var router = express.Router();

const { createMessage } = require("../../controllers/message/message.controller");

//route to create user messages
/**
 * @swagger
 * /api/v1/message:
 *  post:
 *    summary: User message creation
 *    security:
 *      - Authorization: []
 *    description: Create User message
 *    tags:
 *      - Messages
 *    responses:
 *      '200':
 *        description: User message created
 *      '404':
 *        description: User messages not created
 *      '500':
 *        description: Unable to create user messagess
 */
router.post("/message", createMessage);

module.exports = router
