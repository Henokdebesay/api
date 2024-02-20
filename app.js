import { getJoke } from './jokeController.js';

const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const likeBtn = document.getElementById("likeBtn");
const dislikeBtn = document.getElementById("dislikeBtn");

btn.addEventListener("click", () => getJoke(jokeContainer));

// Implement liking and disliking functionality
let likedJokes = [];
let dislikedJokes = [];

likeBtn.addEventListener("click", () => {
    likedJokes.push(jokeContainer.textContent);
    console.log("Liked jokes:", likedJokes);
});

dislikeBtn.addEventListener("click", () => {
    dislikedJokes.push(jokeContainer.textContent);
    console.log("Disliked jokes:", dislikedJokes);
});

// Initial joke fetch
getJoke(jokeContainer);