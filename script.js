(function () {

    document.getElementById("run").addEventListener("click", async () => {
        let result = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
        let joke = await result.json();
        document.getElementById("btn-text").innerText = "More lolz!";
        document.getElementById("joke").innerText = joke.joke;
        if (joke.category === "Dark") {
            document.getElementById("category").innerText = "WARNING: May offend!";
        } else {
            document.getElementById("category").innerText = `Category: ${joke.category}`;
        }
        document.getElementById("id").innerText = `ID: ${joke.id}`;


    })
}());