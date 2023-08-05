import express from 'express'
const router = express.Router()
import {homeController} from "../controller/homeController.js"
import {servicesController} from "../controller/servicesController.js"
import {skillController} from "../controller/skillController.js"
import {contactController} from "../controller/contactController.js"
import {pageNotFoundController} from "../controller/pageNotFoundController.js"

router.get("/", homeController)
router.get("/services", servicesController)
router.get("/skill", skillController)
router.get("/contact", contactController)
router.get("*", pageNotFoundController)

export default router