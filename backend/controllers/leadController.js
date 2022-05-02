const asyncHandler = require("express-async-handler");

const getLeads = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get leads" });
});

const setLead = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "Set a lead" });
});

const updateLead = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Updated a lead ${req.params.id}` });
});

const deleteLead = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Deleted a lead ${req.params.id}` });
});

module.exports = { getLeads, setLead, updateLead, deleteLead };
