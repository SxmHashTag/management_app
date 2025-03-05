import axios from 'axios';

const API_URL = "https://api.example.com/v1";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const setAuthToken = (token: string) => {
  api.defaults.headers.Authorization = `Bearer ${token}`;
};

// Cases
export const getCases = () => api.get("/cases");
export const getCaseById = (caseId: string) => api.get(`/cases/${caseId}`);
export const createCase = (caseData: object) => api.post("/cases", caseData);
export const updateCase = (caseId: string, caseData: object) => api.put(`/cases/${caseId}`, caseData);
export const deleteCase = (caseId: string) => api.delete(`/cases/${caseId}`);

// Evidence
export const addEvidence = (evidenceData: object) => api.post("/evidence", evidenceData);
export const getEvidenceById = (evidenceId: string) => api.get(`/evidence/${evidenceId}`);
export const updateEvidence = (evidenceId: string, evidenceData: object) => api.put(`/evidence/${evidenceId}`, evidenceData);
export const deleteEvidence = (evidenceId: string) => api.delete(`/evidence/${evidenceId}`);

// Reports
export const generateReport = (caseId: string) => api.post("/reports", { caseId });

export default api;
