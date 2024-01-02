const buttonEl = document.querySelector("button");
const closeButton = document.querySelector(".fa-solid");
const movieContainer = document.querySelector(".movie-container");
const trailer = document.querySelector(".trailer");

function openTrailer() {
  trailer.classList.add("active");
  movieContainer.classList.add("pop");
}
function closeTrailer() {
  if (trailer.classList.contains("active")) {
    trailer.classList.remove("active");
    movieContainer.classList.remove("pop");
  }
}

//eventlisteners
buttonEl.addEventListener("click", openTrailer);
closeButton.addEventListener("click", closeTrailer);
