const express = require("express");
var router = express.Router();

const { getAllCategories, getCategory, createNewCategory } = require("../../controllers/category/index.controller");

//route to fetch categorid profile details
/**
 * @swagger
 * /api/v1/categories:
 *  get:
 *    summary: Gets the categories
 *    security:
 *      - Authorization: []
 *    description: Gets all categories
 *    tags:
 *      - Categories
 *    responses:
 *      '200':
 *        description: category details fetched
 *      '404':
 *        description: category not found
 *      '500':
 *        description: Unable to fetch category profile details
 */
router.get("/", getAllCategories);

//route to fetch category details
/**
 * @swagger
 * /api/v1/categories/{id}:
 *  get:
 *    summary: Category details
 *    security:
 *      - Authorization: []
 *    description: Get Category profile details
 *    tags:
 *      - Categories
 *    responses:
 *      '200':
 *        description: category details fetched
 *      '404':
 *        description: category not found
 *      '500':
 *        description: Unable to fetch category profile details
 */
router.get("/:id", getCategory);

// Route to create new category
/**
* @swagger
* /api/v1/categories/new:
*  post:
*    summary: Create new category
*    security:
*      - Authorization: []
*    description: Route to create new category
*    tags:
*      - categories
*    requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
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
router.post('/new', createNewCategory);

module.exports = router
