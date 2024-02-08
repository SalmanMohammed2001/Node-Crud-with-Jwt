import express from 'express'
const router=express.Router()

 import * as CustomerController from '../controller/CustomControl'
const verifyToken=require('../middleware/AuthMiddleware')

router.post("/create",verifyToken,CustomerController.createCustomer)
/*
router.get("/find-by-id/:id",verifyToken,CustomerController.finById)
router.put("/update-by-id/:id",verifyToken,CustomerController.update)
router.delete("/delete-by-id/:id",verifyToken,CustomerController.deleteById)
router.get("/find-all",verifyToken,CustomerController.findAll)
*/

export default router