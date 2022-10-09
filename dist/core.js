const btn = document.querySelector('.btn');
const adviceId = document.querySelector('.advice-id');
const advice = document.querySelector('.advice');

const URL = 'https://api.adviceslip.com/advice'

function getAdvice(){
    fetch(URL, {cache: 'no-store'})
        .then(resp => resp.json())
        .then(jsonData => {
            adviceId.innerHTML = 'advice #' + jsonData['slip']['id'];
            advice.innerHTML = '"' + jsonData['slip']['advice'] + '"';
        });
}

btn.addEventListener('click', getAdvice);
window.addEventListener('load', getAdvice);