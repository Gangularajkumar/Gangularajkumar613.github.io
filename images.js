// List of image file names
const images = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
    '11.jpg',
    '12.jpg',
    '13.jpg',
    '14.jpg',
    '15.jpg',
    'Snapchat-207251271.jpg',
    'IMG_20231220_210835_584.jpg'
    // Add more image file names here
];

// Function to create and append images to the body
function renderImages(imageList) {
    const box = document.querySelector('.box');
    const imagesPerDiv = 5; // Number of images per div with class "grid"
    for (let i = 0; i < imageList.length; i += imagesPerDiv) {
        const dreamDiv = document.createElement('div');
        dreamDiv.className = 'grid';

        for (let j = i; j < i + imagesPerDiv && j < imageList.length; j++) {
            const img = document.createElement('img');
            img.src = imageList[j];
            img.alt = imageList[j];
            dreamDiv.appendChild(img);
        }

        box.appendChild(dreamDiv);
    }
}

// Render images on page load
document.addEventListener('DOMContentLoaded', () => {
    renderImages(images);
});
