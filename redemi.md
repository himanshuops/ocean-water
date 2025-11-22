<!-- model -->

import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  number: String,
  message: String,
}, { timestamps: true });

export default mongoose.model("Contact", contactSchema);

<!-- router -->

import express from "express";
import Contact from "../models/contect.model.js";

const router = express.Router();

// Add contact
router.post("/", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.json({ message: "Contact saved successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save contact" });
  }
});

// Get all contacts (Admin only)
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch contacts" });
  }
});

export default router;
