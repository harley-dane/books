export const fetchBooks = async (bookName) => {
    try {
      const response = await fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(bookName)}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      // Return the docs array, which contains the book data
      return data.docs || [];
    } catch (error) {
      console.error('Error in fetchBooks:', error);
      throw error;
    }
  };