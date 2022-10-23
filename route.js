/**
 * To handle our routes
 */

const express = require("express")
const { addContact, getContact, getContacts } = require("./controller")

const router = express.Router();

// GET
// POST
// DELETE

router.post("/add-contact", addContact)

router.get("/contact-list", getContacts)

router.get("/contact-list/:contactName", getContact)

module.exports = router;