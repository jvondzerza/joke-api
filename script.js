(function () {

    let gallery = [
        'https://i.imgur.com/iqYgWOR.jpg',
        'https://pbs.twimg.com/profile_images/465070908491583488/wuYikoDn.jpeg',
        'https://i.pinimg.com/originals/9a/ba/1b/9aba1bb712df8a7bbe91fc132e07a193.jpg',
        'https://i.pinimg.com/originals/be/ee/80/beee80fdfcebc16c5e86c34131d05943.jpg',
        'https://www.beano.com/wp-content/uploads/legacy/73843_9988150dcff1640aebeafa0e9565fccc065f3d84fb3b0e098dacbfd4236c.jpg'
        ]

    let counter = 1;

    document.getElementById("run").addEventListener("click",  async () => {
        let result = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
        let joke = await result.json();
        document.getElementById("run").innerText = "More lolz!";
        document.getElementById("joke").innerText = joke.joke;
        if (joke.category === "Dark") {
            document.getElementById("category").innerText = "WARNING: May offend!";
        } else {
            document.getElementById("category").innerText = `Category: ${joke.category}`;
        }
        document.getElementById("id").innerText = `ID: ${joke.id}`;


        let image = document.getElementsByTagName('img')[0];
        image.src = gallery[counter];
        counter++;
        if(counter === gallery.length){
            counter = 0;
        }



    })
}());