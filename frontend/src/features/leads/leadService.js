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

const leadService = {
  createLead,
};

export default leadService;
