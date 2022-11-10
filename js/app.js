//These 3 variables select the 3 page elements that get modified or used in my code. The title and text are changed to contain data from the api while the image will rerun my function to have a new random quote when clicked.
const title = document.querySelector('.advice-title');
const text = document.querySelector('.advice-text');
const diceImg = document.querySelector('.dice-img');

const getAdvice = () => {
    //This fetch api sends a request to the service where the quote data is kept while the following .then statement requests that data be returned in a form I can use to interact with my page.
    fetch('https://api.adviceslip.com/advice').then(data => data.json())
    /*
    This second .then statement uses the info fetched from the api in the previous step to create two variables from the data contained within. This creates two variables to hold the id number of the advice and the text respectively.
    Following this, it uses that data to modify the contents of the title and text page elements to match.
    */
    .then(data => {
        const adviceNum = data.slip.id;
        const adviceTxt = data.slip.advice;

        title.innerHTML = `Advice #${adviceNum}`;
        text.innerHTML = `"${adviceTxt}"`;
    });
}
//This initial call kicks things off my telling the getAdvice function to run and pulling the first set of advice data from the api server.
getAdvice();

/*
Finally, the dice image inserted at the bottom of the advice div is called by an event listener and made to invoke the getAdvice function.
This has the effect of changing the advice to the new one that has now been fetched from the server and printing that to the page.
It's worth nothing, however, that the api's ability to call new data operates on a bit of a delay
and will not call a new quote if the time elapsed between the last request and the current one is too short.
*/
diceImg.addEventListener('click', getAdvice);