const express = require("express");
var router = express.Router();

const { createProject } = require("../../controllers/project/project.controller");

//route to create project
/**
 * @swagger
 * /api/v1/project:
 *  post:
 *    summary: User project creation
 *    security:
 *      - Authorization: []
 *    description: Create User project
 *    tags:
 *      - Projects
 *    responses:
 *      '200':
 *        description: User project created
 *      '404':
 *        description: User project not created
 *      '500':
 *        description: Unable to create user projects
 */
router.post("/project", createProject);

module.exports = router
