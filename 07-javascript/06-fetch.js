const url = "https://anapioficeandfire.com/api/books/";

const app = document.querySelector("#books");

const fetchData = (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given
  fetch(url)
    .then((response) => {
      console.log("request successful \n", response);
      return response.json();
    })
    .then((data) => {
      document.querySelector("#loading").remove();
      console.log("Data here \n", data);
      data.forEach((book) => {
        let bookElem = createNewBookElem(book);
        app.appendChild(bookElem);
      });
    });
};

const createNewBookElem = function createNewBookElem(book) {
  const card = document.createElement("section");
  card.className = "d-flex flex-column m-2 p-3";
  //create an element that contains title, author, publication year, and number of pages for each entry.
  const title = document.createElement("h3");
  title.textContent = book.name;

  const author = document.createElement("h7");
  author.textContent = book.authors[0];

  const year = document.createElement("h7");
  year.textContent = book.released.substr(0, 4);

  const numPages = document.createElement("h7");
  numPages.textContent = `${book.numberOfPages} pages`;

  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(year);
  card.appendChild(numPages);
  return card;
};

fetchData(url);
