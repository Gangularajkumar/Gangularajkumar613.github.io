// List of image file names
const images = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    'Snapchat-1668694761.jpg',
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
    'IMG_20240302_131803.jpg',
    'IMG_20240305_132638.jpg',
    'IMG_20240306_110643_029.jpg',
    'IMG_20240325_093851_930.jpg',
    'IMG_20240415_134652.jpg',
    'IMG_20240428_140444_252.jpg',
    'IMG_20240526_195637_777.jpg',
    'IMG_20240607_081240.jpg',
    'Snapchat-557412094.jpg',
    'Snapchat-431513205.jpg',
    'IMG_20240301_162154_358.jpg',
    'Snapchat-207251271.jpg',
    'IMG_20240302_131803.jpg',
    'IMG_20231220_210835_584.jpg',
    'IMG_20240429_091130_565.jpg',
    'Snapchat-847467920.jpg',
    'Snapchat-458470614.jpg'
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
