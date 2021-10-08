const fetchJoke  = async (parameter) => {
    let urlExtension;
    if (parameter === undefined) {
        urlExtension = "random";
    } else {
        urlExtension = `random?category=${parameter}`;
    }
    fetch(`https://api.chucknorris.io/jokes/${urlExtension}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("joke").innerText = data.value;
        })
}

const buttonFetch = (parameter) => {
    document.getElementById("run").addEventListener('click', fetchJoke(parameter))
}

const pageLoad = async () => {
    let nav = document.getElementById("nav")
    fetch('https://api.chucknorris.io/jokes/categories')
        .then(response => response.json())
        .then(data => {
            data.forEach(category => {
                let button = document.createElement('button');
                button.setAttribute("id", category);
                button.setAttribute("class", "btn");
                button.innerText = category;
                nav.appendChild(button);
                let allButtons = document.querySelectorAll(".btn");
                allButtons.forEach(function(button) {
                    button.addEventListener('click', function() {
                        buttonsLogic(this.id);
                    })
                })

                const buttonsLogic = (button) => {
                    switch (button) {
                        case "animal":
                            fetchJoke("animal");
                            buttonFetch("animal");
                            break;
                        case "career":
                            fetchJoke("career");
                            buttonFetch("career");
                            break;
                        case "celebrity":
                            fetchJoke("celebrity");
                            buttonFetch("celebrity");
                            break;
                        case "dev":
                            fetchJoke("dev");
                            buttonFetch("dev");
                            break;
                        case "explicit":
                            fetchJoke("explicit");
                            buttonFetch("explicit");
                            break;
                        case "fashion":
                            fetchJoke("fashion");
                            buttonFetch("fashion");
                            break;
                        case "food":
                            fetchJoke("food");
                            buttonFetch("food");
                            break;
                        case "history":
                            fetchJoke("history");
                            buttonFetch("history");
                            break;
                        case "money":
                            fetchJoke("money");
                            buttonFetch("money");
                            break;
                        case "movie":
                            fetchJoke("movie");
                            buttonFetch("movie");
                            break;
                        case "music":
                            fetchJoke("music");
                            buttonFetch("music");
                            break;
                        case "political":
                            fetchJoke("political");
                            buttonFetch("political");
                            break;
                        case "religion":
                            fetchJoke("religion");
                            buttonFetch("religion");
                            break;
                        case "science":
                            fetchJoke("science");
                            buttonFetch("science");
                            break;
                        case "sport":
                            fetchJoke("sport");
                            buttonFetch("sport");
                            break;
                        case "travel":
                            fetchJoke("travel");
                            buttonFetch("travel");
                            break;
                        default:
                            console.error(button + " is pressed")
                    }
                }
            })
        })
    await fetchJoke();
}
pageLoad();









