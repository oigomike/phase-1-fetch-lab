function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json())
    .then((books) => renderBooks(books))
    .catch((error) => console.error("Fetch error:", error));
}

// Helper function to render book titles
function renderBooks(books) {
  const main = document.querySelector("main");

  books.forEach((book) => {
    const h2 = document.createElement("h2");
    h2.textContent = book.name;
    main.appendChild(h2);
  });
}

// Call the function when page loads
fetchBooks();

// Export for tests
if (typeof module !== "undefined") {
  module.exports = { fetchBooks, renderBooks };
}

