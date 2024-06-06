const express = require("express");
var router = express.Router();

const { createReview } = require("../../controllers/review/review.controller");

//route to create user review
/**
 * @swagger
 * /api/v1/review:
 *  post:
 *    summary: User review
 *    security:
 *      - Authorization: []
 *    description: Create User review
 *    tags:
 *      - Reviews
 *    responses:
 *      '200':
 *        description: User review created
 *      '404':
 *        description: User reviews not created
 *      '500':
 *        description: Unable to create user review
 */
router.post("/review", createReview);

module.exports = router
