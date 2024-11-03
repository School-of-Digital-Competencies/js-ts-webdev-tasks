import { addImage } from "./image";
import { createTags } from "./tags";

export function createCard(cardData: any): HTMLElement {
    const card = document.createElement('div');
    card.setAttribute('class', 'card');

    const title = document.createElement('h2');
    title.textContent = cardData.title;

    const description = document.createElement('p');
    description.textContent = cardData.description; 

    const image = addImage(cardData.image);
    const tags = createTags(cardData.tags);

    card.prepend(image)
    card.append(title, description, tags)

    return card;

}

