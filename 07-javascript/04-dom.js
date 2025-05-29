// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM

// add an event listener on the target element

// callback function to handle event

const callbackCopy = () => {
  document.getElementById("copy").onclick = function () {
    document.querySelector("div.output").textContent =
      document.querySelector("#userInput1").value;
  };
};

callbackCopy();

const callbackInput = () => {
  document.getElementById("userInput2").oninput = function () {
    document.querySelector("#inputEventExample p").textContent =
      document.querySelector("#userInput2").value;
  };
};

callbackInput();

// Exercise #2:
// when the user enters input text, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM

// add an event listener on the target element

// callback function to handle event
