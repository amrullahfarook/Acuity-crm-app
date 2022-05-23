const asyncHandler = require("express-async-handler");

const Lead = require("../models/leadModel");
const User = require("../models/userModel");

const getLeads = asyncHandler(async (req, res) => {
  const leads = await Lead.find({ user: req.user.id });

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

  const lead = await Lead.create({
    name: req.body.name,
    company: req.body.company,
    email: req.body.email,
    phone: req.body.phone,
    lead_source: req.body.lead_source,
    lead_owner: req.body.lead_owner,
    status: req.body.status,
    user: req.user.id,
  });

  res.status(200).json(lead);
});

const updateLead = asyncHandler(async (req, res) => {
  const lead = await Lead.findById(req.params.id);

  if (!lead) {
    res.status(400);
    throw new Error("Lead not found");
  }

  //Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  //Verify if logged user matches user that created lead record
  if (lead.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedLead = await Lead.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedLead);
});

const deleteLead = asyncHandler(async (req, res) => {
  const lead = await Lead.findById(req.params.id);

  if (!lead) {
    res.status(400);
    throw new Error("Lead not found");
  }

  //Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  //Verify if logged user matches user that created lead record
  if (lead.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await lead.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = { getLeads, setLead, updateLead, deleteLead };
