const express = require('express');
var router = express.Router();
const loginController = require("../../controllers/auth/login.controller");
// const validator = require('../../validators/auth.validator');

//sign in route
/**
* @swagger
* /api/v1/auth/login:
*  post:
*    summary: User Sign In
*    description: Endpoint for user login
*    tags:
*      - Auth
*    requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
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
*        description: Login successful
*      '400': 
*        description: Login Error
*/
router.post("/login", /* [validator.login(), validator.validate],  */loginController.signInUser);

module.exports = router;
