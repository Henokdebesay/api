export async function fetchJoke() {
    const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch joke: ${response.statusText}`);
    }
    const data = await response.json();
    return data.joke;
}