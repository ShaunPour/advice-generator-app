const title = document.querySelector('.advice-title');
const text = document.querySelector('.advice-text');

const getAdvice = () => {
    fetch('https://api.adviceslip.com/advice').then(data => data.json())
    .then(data => {
        const adviceNum = data.slip.id;
        const adviceTxt = data.slip.advice;

        title.innerHTML = `Advice #${adviceNum}`;
        text.innerHTML = adviceTxt;
    });
}

getAdvice();