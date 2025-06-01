const url = "https://anapioficeandfire.com/api/books/";

const $app = $("#books");
$app.css("padding-left", 0);
const $loading = $("#loading");

const addBookToDOM = (item) => {
  console.log(item);

  // Create elements using jQuery
  $app.append(
    $("<div>")
      .css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px",
      })
      .append($("<h4>").text(item.name))
      .append($("<p>").text(`by ${item.authors[0]}`))
      .append($("<p>").text(item.released.substr(0, 4)))
      .append($("<p>").text(`${item.numberOfPages} pages`))
  );
};

const fetchData = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        addBookToDOM(item);
      });
    })
    .catch((error) => {
      console.log(error);
      let li = document.createElement("li");
      li.textContent = `An error occured. Please try again.`;
      app.append(li);
    })
    .finally(() => {
      $("#loading").remove();
    });
};

fetchData(url);
