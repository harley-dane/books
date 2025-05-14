import { handleSearch } from './handler.js';
import { initializeApp } from './init.js';
import { debounce } from './util.js';
import { clearInput } from './dom.js';

const main = () => {
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  const resultsContainer = document.getElementById('results');

  // Initialize with default "Nexus" search
  initializeApp(resultsContainer);

  // Debounced search handler
  const debouncedSearch = debounce((query) => handleSearch(query, resultsContainer), 300);

  // Event listeners
  searchBtn.addEventListener('click', () => {
    handleSearch(searchInput.value, resultsContainer);
    clearInput(searchInput);
  });

  searchInput.addEventListener('input', (e) => debouncedSearch(e.target.value));
};

document.addEventListener('DOMContentLoaded', main);