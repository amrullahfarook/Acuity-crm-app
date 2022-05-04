const asyncHandler = require("express-async-handler");

const Lead = require("../models/leadModel");

const getLeads = asyncHandler(async (req, res) => {
  const leads = await Lead.find();

  res.status(200).json(leads);
});

const setLead = asyncHandler(async (req, res) => {
  const leadProps = req.body;
  for (var key in leadProps) {
    if (!leadProps[key]) {
      res.status(400);
      throw new Error(`Please add a ${key} field`);
    }
  }

  const goal = await Lead.create({
    name: req.body.name,
    company: req.body.company,
    email: req.body.email,
    phone: req.body.phone,
    lead_source: req.body.lead_source,
    lead_owner: req.body.lead_owner,
    status: req.body.status,
  });

  res.status(200).json(goal);
});

const updateLead = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Updated a lead ${req.params.id}` });
});

const deleteLead = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Deleted a lead ${req.params.id}` });
});

module.exports = { getLeads, setLead, updateLead, deleteLead };
