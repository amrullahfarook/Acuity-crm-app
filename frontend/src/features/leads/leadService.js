import axios from "axios";

const API_URL = "/api/leads/";

//Create new goal
const createLead = async (leadData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, leadData, config);

  return response.data;
};

//Get user leads
const getLeads = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

//Delete user lead
const deleteLead = async (leadId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + leadId, config);

  return response.data;
};

const leadService = {
  createLead,
  getLeads,
  deleteLead,
};

export default leadService;
