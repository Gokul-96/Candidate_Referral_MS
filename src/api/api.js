import axios from 'axios';

const API = axios.create({ baseURL: 'https://candidate-referral-ms-be.onrender.com' });

// Fetch all candidates
export const fetchCandidates = () => API.get('/candidates');

// Add a new candidate
export const addCandidate = (candidateData) => API.post('/candidates', candidateData);

// Update candidate status
export const updateCandidateStatus = (id, status) =>
  API.put(`/candidates/${id}/status`, { status });

export default API;
