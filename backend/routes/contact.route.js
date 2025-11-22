import express from "express"
import { createContact, deleteMsg, getAllContacts } from "../controllers/contact.controller.js";
import isAuthenticated from '../middleware/isAuthenticated.js'

const router = express.Router();

// public route for contact form
router.route("/").post(createContact)
// protected route for admin dashboard
router.route("/").get( getAllContacts)
router.route("/delete/:id").delete( deleteMsg)

export default router;


