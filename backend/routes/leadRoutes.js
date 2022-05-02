const express = require("express");
router = express.Router();
const {
  getLeads,
  setLead,
  updateLead,
  deleteLead,
} = require("../controllers/leadController");

router.route("/").get(getLeads).post(setLead);
router.route("/:id").put(updateLead).delete(deleteLead);

module.exports = router;
