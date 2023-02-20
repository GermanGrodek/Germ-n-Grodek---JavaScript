const requesUrl =
`https://api.unsplash.com/search/photos/?query=PC&client_id=REuTfiZvijMEAmtduJystpTCWpj2LgcSApiDL2phuy8&query=computer+case`;
const getImagesButton = document.querySelector('.getImagesButton');
const imageToDisplay = document.querySelector('.imageToDisplay');

getImagesButton.addEventListener('click', async () => {
    let randomImage = await getNewImage();
    imageToDisplay.src = randomImage;
});

async function getNewImage() {
    let randomNumber = Math.floor(Math.random() * 10);
    return fetch(requesUrl)
    .then((response) => response.json())
    .then((data) => {
        let allImages = data.results[randomNumber];
        return allImages.urls.regular;
    })
}