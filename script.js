const fetchJoke  = (parameter) => {
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
    document.getElementById("run").addEventListener('click', () => {fetchJoke(parameter)})
}

const rHK = () => {
    document.getElementById("rhk").addEventListener("click", () => {
        fetchJoke();
        let run = document.getElementById("run");
        run.remove();
    });
}

const searchFunction = () => {
    let resultsSection = document.getElementById("search-results");
    let input = document.getElementById("search");
    input.addEventListener("keypress", function (e){
        if (e.key === 'Enter') {
            fetch(`https://api.chucknorris.io/jokes/search?query=${input.value}`)
                .then(response => response.json())
                .then(data => {
                    let resultsArr = data.result;
                    resultsArr.forEach(result => {
                        let results = document.createElement('p');
                        results.innerText = result.value;
                        resultsSection.appendChild(results);
                    })
                })
        }
    })
}

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

const pageLoad = () => {
    let nav = document.getElementById("nav")
    let jokeContainer = document.getElementById("child-container")
    fetch('https://api.chucknorris.io/jokes/categories')
        .then(response => response.json())
        .then(data => {
            data.forEach(category => {
                let button = document.createElement("button");
                button.setAttribute("id", category);
                button.setAttribute("class", "btn");
                button.innerText = category;
                button.addEventListener("click", function() {
                    let run = document.createElement("button")
                    run.setAttribute("id", "run")
                    run.innerText = "Viva Chuck";
                    jokeContainer.appendChild(run);
                    buttonsLogic(this.id);
                })
                nav.appendChild(button);
            })
        })
    fetchJoke();
}
pageLoad();

searchFunction();

rHK();











