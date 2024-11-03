export function createTags(tagsArray: string[]): HTMLElement {
    const tagsContainer = document.createElement('div');
    tagsContainer.setAttribute('class', 'tags')

    tagsArray.forEach((tag, index) => {
        const tagElement = document.createElement('span');
        tagElement.textContent = tag;
        tagElement.style.color = 'blue'; 
        tagsContainer.append(tagElement);

        if (index < tagsArray.length - 1) {
            const space = document.createTextNode(' ');
            tagsContainer.append(space);
        }
    });

    return tagsContainer;
}