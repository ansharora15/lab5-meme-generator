const searchBtn = document.getElementById('search-btn');
const searchQuery = document.getElementById('search-query');
const imageContainer = document.getElementById('image-container');
const canvas = document.getElementById('meme-canvas');
const ctx = canvas.getContext('2d');
const topText = document.getElementById('top-text');
const bottomText = document.getElementById('bottom-text');
const generateBtn = document.getElementById('generate-btn');
const downloadBtn = document.getElementById('download-btn'); // Download button

// Search and display images from Unsplash
searchBtn.addEventListener('click', async () => {
    const query = searchQuery.value;
    try {
        const res = await fetch(`/api/images?query=${query}`);
        const data = await res.json();
        console.log('API Data:', data);  // Debugging log

        if (!data.results || data.results.length === 0) {
            console.error('No results found!');
            alert('No images found for this search term.');
            return;
        }

        imageContainer.innerHTML = '';

        data.results.forEach(image => {
            const imageWrapper = document.createElement('div');
            imageWrapper.style.margin = '10px';

            const imgElement = document.createElement('img');
            imgElement.src = image.urls.small;
            imgElement.alt = image.alt_description || "Unsplash Image";
            imgElement.style.cursor = 'pointer';
            imgElement.addEventListener('click', () => drawImage(imgElement));

            const attribution = document.createElement('p');
            attribution.innerHTML = `Photo by <a href="${image.user.links.html}" target="_blank">${image.user.name}</a> on <a href="https://unsplash.com" target="_blank">Unsplash</a>`;
            attribution.style.fontSize = '12px';
            attribution.style.margin = '5px 0';

            imageWrapper.appendChild(imgElement);
            imageWrapper.appendChild(attribution);
            imageContainer.appendChild(imageWrapper);
        });
    } catch (error) {
        console.error('Error fetching images:', error);
    }
});

// Draw the selected image on the canvas
function drawImage(imgElement) {
    const tempImage = new Image();
    tempImage.crossOrigin = 'anonymous'; // Important for CORS
    tempImage.src = imgElement.src;

    tempImage.onload = () => {
        const padding = 100; // Space for text
        const canvasWidth = tempImage.naturalWidth;
        const canvasHeight = tempImage.naturalHeight + padding;

        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(tempImage, 0, 0, canvasWidth, tempImage.naturalHeight);
    };
}

// Generate meme text on the image
generateBtn.addEventListener('click', () => {
    ctx.font = '40px Impact';
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.textAlign = 'center';

    const textYTop = 50;
    const textYBottom = canvas.height - 20;

    if (topText.value.trim() !== '') {
        ctx.fillText(topText.value, canvas.width / 2, textYTop);
        ctx.strokeText(topText.value, canvas.width / 2, textYTop);
    }

    if (bottomText.value.trim() !== '') {
        ctx.fillText(bottomText.value, canvas.width / 2, textYBottom);
        ctx.strokeText(bottomText.value, canvas.width / 2, textYBottom);
    }
});

// Download the generated meme
downloadBtn.addEventListener('click', () => {
    console.log('Download button clicked'); // Debugging log

    if (canvas.width === 0 || canvas.height === 0) {
        alert('Please select an image and generate the meme first!');
        return;
    }

    const image = canvas.toDataURL('image/png');
    console.log('Image data:', image); // Debugging log

    const link = document.createElement('a');
    link.href = image;
    link.download = 'meme.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    console.log('Download triggered');
});