const express = require("express");
var router = express.Router();

const { getAllUsers } = require("../../controllers/user/index.controller");

//route to fetch user profile details
/**
 * @swagger
 * /api/v1/users:
 *  get:
 *    summary: Users list
 *    security:
 *      - Authorization: []
 *    description: Get User list
 *    tags:
 *      - Users
 *    responses:
 *      '200':
 *        description: User list fetched
 *      '404':
 *        description: User not found
 *      '500':
 *        description: Unable to fetch user details
 */
router.get("/", getAllUsers);

module.exports = router
