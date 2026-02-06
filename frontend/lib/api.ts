// frontend/lib/api.ts

// This will automatically use the Render URL in production 
// and localhost:8000 during development.
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export const api = {
  analyze: `${API_BASE_URL}/analyze`,
  auditSummary: `${API_BASE_URL}/audit-summary`,
  search: (query: string) => `${API_BASE_URL}/search?query=${query}`,
  metrics: `${API_BASE_URL}/metrics`,
};