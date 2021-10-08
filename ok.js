(function () {
let allButtons = document.getElementsByClassName("btn")
    allButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            buttonsLogic(this.id);
        })
    })
console.log(allButtons);
    const getJoke = async (jokeType) => {
        let result = await fetch(`https://v2.jokeapi.dev/joke/${jokeType}?type=single`);
        let joke = await result.json();
        console.log(jokeType);
        displayJoke(joke);
    }
    function displayJoke(joke) {
        document.getElementById("run").addEventListener("click", () => {
            document.getElementById("run").innerText = "More lolz!";
            document.getElementById("joke").innerText = joke.joke;
            document.getElementById("category").innerText = joke.category;
            document.getElementById("id").innerText = `ID: ${joke.id}`;
        })
    }

    const buttonsLogic = (button) => {
        switch (button) {
            case "any":
                getJoke("Any");
                break;
            case "programming":
                getJoke("Programming");
                break;
            case "misc":
                getJoke("Miscellaneous");
                break;
            case "dark":
                getJoke("Dark");
                break;
            case "pun":
                getJoke("Pun");
                break;
            case "spooky":
                getJoke("Spooky");
                break;
            case "christmas":
                getJoke("Christmas");
                break;
            case "run":
                console.log("run button pressed");
                break;
            default:
                console.error(button + " is pressed")
        }
    }


})