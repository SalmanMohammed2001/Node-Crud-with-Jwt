import express from 'express'
const router=express.Router()

import * as CustomerController from '../controller/CustomerController'

router.post("/create",CustomerController.save)

export default router