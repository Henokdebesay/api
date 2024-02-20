const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = async () => {
    jokeContainer.classList.remove("fade");
    try {
        const response = await fetch(url);
        const data = await response.json(); // Change here to await the response directly

        jokeContainer.textContent = `${data.joke}`; // Access the joke directly from data
        jokeContainer.classList.add("fade");
    } catch (error) {
        console.error("Error fetching joke:", error);
    }
};

btn.addEventListener("click", getJoke);
getJoke(); // Initial joke fetch