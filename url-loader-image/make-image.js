function makeImage(platziImg){
    const img = document.createElement('img');
    img.setAttribute('src', platziImg);
    img.setAttribute('width', 50);
    img.setAttribute('height', 50);
    document.body.append(img);
}

export default makeImage;