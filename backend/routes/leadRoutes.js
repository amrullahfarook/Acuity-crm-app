const express = require("express");
router = express.Router();
const {
  getLeads,
  setLead,
  updateLead,
  deleteLead,
} = require("../controllers/leadController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getLeads).post(protect, setLead);
router.route("/:id").put(protect, updateLead).delete(protect, deleteLead);

module.exports = router;
