/**
 * To handle our routes
 */

const express = require("express")
const { addContact, getContact, getContacts, deleteContact, updateContact } = require("./controller")

const router = express.Router();

// GET
// POST
// DELETE
// PUT

router.post("/add-contact", addContact)

router.get("/contact-list", getContacts)

// Path param
router.get("/contact-list/:contactName", getContact)

router.delete("/delete-contact/:contactName", deleteContact)

router.put("/update-contact/:contactName", updateContact)

module.exports = router;