const mongoose = require("mongoose");

const leadSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a lead name"],
    },
    company: {
      type: String,
      required: [true, "Please add a company name"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
    },
    phone: {
      type: String,
      required: [true, "Please add a phone number"],
    },
    lead_source: {
      type: String,
      required: [true, "Please add a lead source"],
    },
    lead_owner: {
      type: String,
      required: [true, "Please add a lead owner"],
    },
    status: {
      type: String,
      required: [true, "Please add a lead status"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Lead", leadSchema);
