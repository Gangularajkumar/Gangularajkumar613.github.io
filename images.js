// List of image file names
const images = [
    '2.jpg',
    'IMG_20240413_170548.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    'IMG_20240616_110133.jpg',
    'Snapchat-74229739.jpg',
    'Snapchat-200286665.jpg',
    'Snapchat-616391585.jpg',
    'IMG_20240630_190537.jpg',
    'IMG_20240630_180224.jpg',
    'IMG_20240616_110502.jpg',
    'IMG_20240616_205645.jpg',
    'IMG-20231027-WA0046.jpg',
    'IMG-20240118-WA0016.jpg',
    'IMG-20240118-WA0018.jpg',
    'IMG-20240118-WA0022.jpg',
    'IMG-20240118-WA0020.jpg',
    'IMG-20231027-WA0044.jpg',
    'IMG-20231027-WA0041.jpg',
    'IMG_20230107_140505.jpg',
    'IMG_20230715_121245.jpg',
    'IMG_20230804_111832.jpg',
    'IMG_20230806_214246.jpg',
    'IMG_20230815_102526.jpg',
    'IMG_20240612_073434.jpg',
    'Snapchat-1668694761.jpg',
    'Snapchat-2038316692.jpg',
    'Snapchat-1315315846.jpg',
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
