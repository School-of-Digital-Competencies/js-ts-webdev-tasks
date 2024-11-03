import { createCard } from './components/card';
import  cardData from './db/cargs.json';


function heading(): HTMLDivElement {
    const head: HTMLDivElement = document.createElement('div');
    head.setAttribute('class', 'heading')

    head.innerHTML = `
    <h1>Our Works</h1>
    <p>The most important part of the Startup Framework is the samples. The <br>
    samples form a set of 20 usable pages you can use as is or you can add <br>
    new blocks from UI Kit.</p>
`;

    return head;
}








document.addEventListener("DOMContentLoaded", () => {
    const titleOfPage = heading();
    document.body.append(titleOfPage);

    const cardContainer = document.createElement('div');
    cardContainer.setAttribute('class', 'card-container');

    cardData.forEach(data => {
        const card = createCard(data);
        cardContainer.append(card)
    }) 

    document.body.append(cardContainer) 
})