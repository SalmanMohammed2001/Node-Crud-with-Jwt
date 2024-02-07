import express from 'express'
const router=express.Router()

import * as CustomerController from '../controller/CustomerController'

router.post("/create",CustomerController.save)
router.get("/find-by-id/:id",CustomerController.finById)
router.put("/update-by-id/:id",CustomerController.update)

export default router