import express from 'express'
const router=express.Router()

 import * as CustomerController from '../controller/CustomerController'
const verifyToken=require('../middleware/AuthMiddleware')

router.post("/create",verifyToken,CustomerController.createCustomer)

router.get("/find-by-id/:id",verifyToken,CustomerController.findCustomer)

router.put("/update-by-id/:id",verifyToken,CustomerController.updateCustomer)

router.delete("/delete-by-id/:id",verifyToken,CustomerController.deleteCustomer)

router.get("/find-all",verifyToken,CustomerController.findAllCustomer)


export default router