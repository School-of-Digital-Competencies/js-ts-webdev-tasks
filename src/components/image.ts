export function addImage(imgName: string): HTMLImageElement {
    const img = document.createElement('img');
    img.src = new URL(`../assets/images/${imgName}`, import.meta.url).href;
    img.setAttribute('class', 'card-img')

    return img;
} 