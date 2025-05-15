import { handleSearch } from './handler.js';
import { getElement } from './util.js';

export const setupEventListeners = () => {
    const searchBtn = getElement('#searchBtn');
    const countryInput = getElement('#countryInput');
    const countryInfo = getElement('#countryInfo');
    const errorMessage = getElement('#errorMessage');

    searchBtn.addEventListener('click', () => {
        const countryName = countryInput.value.trim();
        if (countryName) {
            handleSearch(countryName, countryInfo, errorMessage);
        }
    });

    countryInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const countryName = countryInput.value.trim();
            if (countryName) {
                handleSearch(countryName, countryInfo, errorMessage);
            }
        }
    });
};
