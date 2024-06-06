const express = require("express");
var router = express.Router();

const { getAllUsers, getUser } = require("../../controllers/user/index.controller");

//route to fetch user profile details
/**
 * @swagger
 * /api/v1/users:
 *  get:
 *    summary: User profile Details
 *    security:
 *      - Authorization: []
 *    description: Get User profile details
 *    tags:
 *      - Users
 *    responses:
 *      '200':
 *        description: User details fetched
 *      '404':
 *        description: User not found
 *      '500':
 *        description: Unable to fetch user profile details
 */
router.get("/", getAllUsers);

//route to fetch user profile details
/**
 * @swagger
 * /api/v1/users/{id}:
 *  get:
 *    summary: User profile Details
 *    security:
 *      - Authorization: []
 *    description: Get User profile details
 *    tags:
 *      - Users
 *    responses:
 *      '200':
 *        description: User details fetched
 *      '404':
 *        description: User not found
 *      '500':
 *        description: Unable to fetch user profile details
 */
router.get("/:id", getUser);

module.exports = router
