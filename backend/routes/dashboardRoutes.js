const express = require("express");
router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Get overview" });
});

module.exports = router;
