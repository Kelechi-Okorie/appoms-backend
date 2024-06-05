const express = require("express");
var router = express.Router();

const { getAllProjects } = require("../../controllers/project/index.controller");

//route to fetch project details
/**
 * @swagger
 * /api/v1/projects:
 *  get:
 *    summary: Project Details
 *    security:
 *      - Authorization: []
 *    description: Get project details
 *    tags:
 *      - Projects
 *    responses:
 *      '200':
 *        description: Project details fetched
 *      '404':
 *        description: Project not found
 *      '500':
 *        description: Unable to fetch project details
 */
router.get("/project", getAllProjects);

module.exports = router
