import express from 'express'
const router = express.Router()
import {homeController} from "../controller/homeController.js"
import {servicesController} from "../controller/servicesController.js"
import {skillController} from "../controller/skillController.js"
import {contactController} from "../controller/contactController.js"

router.get("/", homeController)
router.get("/services", servicesController)
router.get("/skill", skillController)
router.get("/contact", contactController)

export default router