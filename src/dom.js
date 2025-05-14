import { fetchBooks } from './data.js';

const PLACEHOLDER = 'https://placehold.co/150x150?text=No+Cover';

export const displayBooks = async (query, container) => {
  container.innerHTML = query?.trim() ? '<p class="loading">Loading...</p>' : '<p class="error">Please enter a search query.</p>';
  if (!query?.trim()) return;

  try {
    const books = await fetchBooks(query);
    container.innerHTML = '';

    if (!books?.length) {
      container.innerHTML = '<p class="error">No books found.</p>';
      return;
    }

    books.forEach(book => {
      const card = document.createElement('div');
      card.classList.add('book-card');
      card.innerHTML = `
        <img src="${book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : PLACEHOLDER}" 
             alt="${book.title || 'Book cover'}" 
             style="width:150px;height:150px;" 
             loading="lazy" 
             onerror="this.src='${PLACEHOLDER}';this.alt='Failed to load cover';">
        <h3>${book.title || 'Unknown Title'}</h3>
        <p>${book.author_name?.join(', ') || 'Unknown Author'}</p>
      `;
      container.appendChild(card);
    });
  } catch (error) {
    console.error('Error fetching books:', error);
    container.innerHTML = '<p class="error">Error loading books. Please try again.</p>';
  }
};

export const clearInput = (input) => {
  input.value = '';
};