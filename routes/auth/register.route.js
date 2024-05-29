const express = require('express');
var router = express.Router();
const registerController = require('../../controllers/auth/register.controller');

//registration route
/**
* @swagger
* /api/v1/auth/register:
*  post:
*    summary: User Registration
*    description: Endpoint for user registration
*    tags:
*      - Auth
*    requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               firstName:
*                 type: string
*                 description: First name
*                 example: John
*               lastName:
*                 type: string
*                 description: Last name
*                 example: Doe
*               phone:
*                  type: string
*                  description: user phone number
*                  example: 08068298922
*               email:
*                  type: string
*                  description: user email address
*                  example: johndoe@gmail.com
*               password:
*                  type: string
*                  description: user password
*                  example: Password@!
*    responses:
*      '200':
*        description: User registered successfully
*      '400': 
*        description: Unable to register user
*/
router.post("/register", registerController.registerUser)

module.exports = router;
