import { displayBooks } from './dom.js';

export const handleSearch = async (query, resultsContainer) => {
  if (!query.trim()) return;
  await displayBooks(query, resultsContainer); // Call displayBooks directly with query
};