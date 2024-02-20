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


// Function to send a POST request to the API
const sendPostRequest = async (data) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        console.log("POST Request Result:", result);
    } catch (error) {
        console.error("Error sending POST request:", error);
    }
};

// Function to send a PUT request to the API
const sendPutRequest = async (id, data) => {
    try {
        const response = await fetch(`${url}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        console.log("PUT Request Result:", result);
    } catch (error) {
        console.error("Error sending PUT request:", error);
    }
};

// Function to send a PATCH request to the API
const sendPatchRequest = async (id, data) => {
    try {
        const response = await fetch(`${url}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        console.log("PATCH Request Result:", result);
    } catch (error) {
        console.error("Error sending PATCH request:", error);
    }
};

btn.addEventListener("click", getJoke);
getJoke(); // Initial joke fetch