const express = require("express");
router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Get contacts" });
});

router.post("/", (req, res) => {
  res.status(200).json({ message: "Created a contact" });
});

router.put("/:id", (req, res) => {
  res.status(200).json({ message: `Updated a contact ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ message: `Deleted a contact ${req.params.id}` });
});

module.exports = router;
