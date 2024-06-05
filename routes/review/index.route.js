const express = require("express");
var router = express.Router();

const { getAllReviews } = require("../../controllers/review/index.controller");

//route to fetch reviews
/**
 * @swagger
 * /api/v1/reviews:
 *  get:
 *    summary: User reviews
 *    security:
 *      - Authorization: []
 *    description: Get User reviews
 *    tags:
 *      - Reviews
 *    responses:
 *      '200':
 *        description: User reviews fetched
 *      '404':
 *        description: User reviews not found
 *      '500':
 *        description: Unable to fetch user reviews
 */
router.get("/", getAllReviews);

module.exports = router
