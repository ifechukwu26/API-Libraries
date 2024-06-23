const apiKey = 'AIzaSyDORu-fU-Vt3lgBZNrY9yFzao-g_wV1eik';

// Fetch books from Google Books API
function searchBooks() {
  const searchInput = document.getElementById("searchInput").value;
  const url = "https://www.googleapis.com/books/v1/volumes?q=" + searchInput;

  fetch(url)
    .then(response => response.json())
    .then(data => displayResults(data.items))
    .catch(error => console.log(error));
}
// Display search results
function displayResults(books) {
  const container = document.getElementById("resultsContainer");
  container.innerHTML = "";

  books.forEach(book => {
    const title = book.volumeInfo.title;
    const author = book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "Unknown Author";
    const thumbnail = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "";
    const previewLink = book.volumeInfo.previewLink;

    const bookElement = document.createElement("div");
    bookElement.classList.add("book");

    const titleElement = document.createElement("h2");
    titleElement.textContent = title;
    titleElement.classList.add("text-2xl", "font-semibold", "mb-2");


    const authorElement = document.createElement("p");
    authorElement.textContent = "By " + author;
    authorElement.classList.add("text-gray-700", "mb-2");


    const thumbnailElement = document.createElement("img");
    thumbnailElement.src = thumbnail;

    const previewLinkElement = document.createElement("a");
    previewLinkElement.href = previewLink;
    previewLinkElement.target = "_blank";
    previewLinkElement.textContent = "View Details";
    previewLinkElement.classList.add("text-blue-500", "hover:underline");


    bookElement.appendChild(titleElement);
    bookElement.appendChild(authorElement);
    bookElement.appendChild(thumbnailElement);
    bookElement.appendChild(previewLinkElement);

    container.appendChild(bookElement);
  });
}
// Add event listeners
const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", searchBooks);
