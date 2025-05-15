import { displayBooks } from './dom.js';

export const initializeApp = async (resultsContainer) => {
    await displayBooks('Nexus', resultsContainer); // Pass query instead of calling handleSearch
};
