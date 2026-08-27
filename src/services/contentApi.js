import axios from "axios";

const CONTENT_API_BASE_URL = "https://nim-backend-zwlf.onrender.com/api";

const normalizeEntry = (entry) => {
  if (!entry || typeof entry !== "object") {
    return null;
  }

  if (entry.attributes && typeof entry.attributes === "object") {
    return { id: entry.id, ...entry.attributes };
  }

  return entry;
};

const normalizeCollection = (response) => {
  const entries = response?.data?.data;

  if (!Array.isArray(entries)) {
    return [];
  }

  return entries.map(normalizeEntry).filter(Boolean);
};

const normalizeSingle = (response) =>
  normalizeEntry(response?.data?.data) || {};

export const fetchEvents = async () => {
  const response = await axios.get(`${CONTENT_API_BASE_URL}/events`, {
    params: { sort: "publishedAt:desc" },
  });

  return normalizeCollection(response);
};

export const fetchSermons = async ({ page = 1, pageSize = 12 } = {}) => {
  const response = await axios.get(`${CONTENT_API_BASE_URL}/sermons`, {
    params: {
      sort: "createdAt:DESC",
      "pagination[page]": page,
      "pagination[pageSize]": pageSize,
    },
  });

  return normalizeCollection(response);
};

export const fetchLeadProfile = async () => {
  const response = await axios.get(`${CONTENT_API_BASE_URL}/about-the-lead`);

  return normalizeSingle(response);
};

