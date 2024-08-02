const button = document.getElementById("submit-joke");
const joke = document.getElementById("content-joke");
const error = document.getElementById("error-joke");

const defaultError = "Error searching for joke";

function onFetchJoke(event) {
  event.preventDefault();

  joke.textContent = "";
  error.textContent = "";

  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => {
      if (!response.ok) throw new Error(defaultError);

      return response.json();
    })
    .then((data) => {
      if (data.erro) {
        error.textContent = defaultError;
      } else {
        joke.textContent = data.value;
      }
    })
    .catch((error) => {
      errorSpan.textContent = error.message;
    });
}

button.addEventListener("click", onFetchJoke);
