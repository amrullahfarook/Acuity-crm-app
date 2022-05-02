const express = require("express");
router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Get activities" });
});

router.post("/", (req, res) => {
  res.status(200).json({ message: "Created a activity" });
});

router.put("/:id", (req, res) => {
  res.status(200).json({ message: `Updated an activity ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ message: `Deleted an activity ${req.params.id}` });
});

module.exports = router;
