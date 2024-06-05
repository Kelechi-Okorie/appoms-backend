const express = require("express");
var router = express.Router();

const { getAllMessages } = require("../../controllers/message/index.controller");

//route to fetch user messages
/**
 * @swagger
 * /api/v1/mesages:
 *  get:
 *    summary: User messages
 *    security:
 *      - Authorization: []
 *    description: Get User messages
 *    tags:
 *      - Messages
 *    responses:
 *      '200':
 *        description: User messages fetched
 *      '404':
 *        description: User messages not found
 *      '500':
 *        description: Unable to fetch user messagess
 */
router.get("/message", getAllMessages);

module.exports = router
