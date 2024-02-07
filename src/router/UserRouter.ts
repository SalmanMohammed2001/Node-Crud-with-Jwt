import * as UserController from '../controller/UserController'
import express from 'express'
const router=express.Router()

router.post("/signup",UserController.register)
router.post("/login",UserController.login)

export default  router;