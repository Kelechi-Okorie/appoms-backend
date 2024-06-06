const express = require("express");
var router = express.Router();

const { getAllUsers, getUser, addServicesToUser, addDescription, getUserServices } = require("../../controllers/user/index.controller");

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

// Add services to user
/**
* @swagger
* /api/v1/users/services:
*  post:
*    summary: Add new services to users
*    security:
*      - Authorization: []
*    description: Route to add new services to users
*    tags:
*      - Users,
*      - Services
*    requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               services:
*                  type: array
*                  description: services to be added 
*                  example: []
*               userId:
*                  type: integer
*                  description: User to add services to
*                  example: 1
*    responses:
*      '200':
*        description: services successfully added to user
*      '500':
*        description: Unable to add services to user
*/
router.post('/services', addServicesToUser);

// Add services to user
/**
* @swagger
* /api/v1/users/services:
*  post:
*    summary: Add new services to users
*    security:
*      - Authorization: []
*    description: Route to add new services to users
*    tags:
*      - Users,
*      - Services
*    requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               services:
*                  type: array
*                  description: services to be added 
*                  example: []
*               userId:
*                  type: integer
*                  description: User to add services to
*                  example: 1
*    responses:
*      '200':
*        description: services successfully added to user
*      '500':
*        description: Unable to add services to user
*/
router.post('/add-description', addDescription);


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

//route to fetch user services
/**
 * @swagger
 * /api/v1/users/{id}/services:
 *  get:
 *    summary: User services
 *    security:
 *      - Authorization: []
 *    description: Get User services
 *    tags:
 *      - Users
 *      - Services
 *    responses:
 *      '200':
 *        description: User services fetched
 *      '404':
 *        description: User not found
 *      '500':
 *        description: Unable to fetch user profile details
 */
router.get("/:id/services", getUserServices);

module.exports = router
