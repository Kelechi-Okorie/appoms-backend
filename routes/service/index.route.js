const express = require("express");
var router = express.Router();

const { getAllServices, getService, createNewService } = require("../../controllers/service/index.controller");

//route to fetch services
/**
 * @swagger
 * /api/v1/services:
 *  get:
 *    summary: User service Details
 *    security:
 *      - Authorization: []
 *    description: Get User services
 *    tags:
 *      - Services
 *    responses:
 *      '200':
 *        description: User services fetched
 *      '404':
 *        description: User services not found
 *      '500':
 *        description: Unable to fetch user services
 */
router.get("/", getAllServices);

//route to fetch service details
/**
 * @swagger
 * /api/v1/services/{id}:
 *  get:
 *    summary: Service details
 *    security:
 *      - Authorization: []
 *    description: Get Service profile details
 *    tags:
 *      - Services
 *    responses:
 *      '200':
 *        description: services details fetched
 *      '404':
 *        description: services not found
 *      '500':
 *        description: Unable to fetch services profile details
 */
router.get("/:id", getService);

// Route to create new service
/**
* @swagger
* /api/v1/services/new:
*  post:
*    summary: Create new service
*    security:
*      - Authorization: []
*    description: Route to create new service
*    tags:
*      - service
*    requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               category:
*                 type: string
*                 description: Category of the service
*                 example: Good category
*               name:
*                  type: string
*                  description: Name of the category 
*                  example: Good category
*               description:
*                  type: string
*                  description: User selected payment type for order
*                  enum : "this is the description of good category"
*    responses:
*      '200':
*        description: category created successfully
*      '500':
*        description: Unable to create category
*/
router.post('/new', createNewService);


module.exports = router
