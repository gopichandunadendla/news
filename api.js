let p = document.querySelector('p');
let button = document.querySelector('button');

button.addEventListener('click', news);

let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=e2e12eeaea884a5a9b5604ecad667763`;

function news() {
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let randomIndex = Math.floor(Math.random() * data.articles.length);
            p.innerText = data.articles[randomIndex].title;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}