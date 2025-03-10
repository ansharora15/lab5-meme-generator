Lab5: Meme Generator App

* *Date Created*: 09 03 2025
* *Last Modification Date*: 09 03 2025
GitHub Repository: [Insert Link Here]
Deployed Application Link: [Insert Link Here]


This project is a simple Meme Generator web application built using Node.js, Express, and JavaScript. Users can search for images via the Unsplash API, add custom top and bottom text, and download the generated memes.

Installation Instructions

Clone the Repository:

git clone [Your Repository Link Here]

Navigate to the Project Directory:

cd lab5

Install Dependencies:

npm install

How to Run the Project

Start the server:

npm start

Open your browser and navigate to:

http://localhost:3000

How to Run the Tests

Execute the following command to run Jest tests:

npm test

Project Structure

lab5/
├── node_modules/
├── public/
│   ├── index.html
│   ├── script.js
│   └── styles.css
├── server.js
├── package.json
├── app.test.js
├── README.txt
└── package-lock.json

## Authors

* (Ansh Arora) (an608751@dal.ca) - Author

## Built With

Express.js - Used for setting up the server and handling API requests. (URL: https://expressjs.com)
Node.js - JavaScript runtime environment for building and running the application. (URL: https://nodejs.org/en)
Jest - JavaScript testing framework used for unit testing. (URL: https://jestjs.io)
Unsplash API - Used to fetch images for meme generation.(URL: https://unsplash.com/developers)
HTML5 Canvas API - Used to draw images and text on the canvas for meme creation. (URL: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)


## Sources Used

1. Unsplash API
Where Implemented: Used in script.js to fetch images based on the user's search query.
How Implemented: Integrated the API using the fetch method to dynamically retrieve images and display them on the page.
Why Implemented: To enable dynamic image fetching for meme generation.
How Modified: Implemented error handling to manage cases when no results were found.

2. Jest
Where Implemented: Used for setting up unit tests in app.test.js.
How Implemented: Referred to the documentation to configure Jest for testing canvas functionality and download features.
Why Implemented: To ensure the reliability and accuracy of the application's key functionalities.
How Modified: Adapted sample test structures to suit the specific logic and requirements of this project.

3. MDN Web Docs - Canvas API
Where Implemented: Used in script.js for drawing images and adding text to the canvas element.
How Implemented: Referred to the documentation to correctly set canvas dimensions, draw images, and render text.
Why Implemented: To facilitate the creation and customization of memes on the client-side.
How Modified: Customized text positioning, font styling, and download functionality.

### Script.js

*Lines 93 - 112*

```
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

```

The code above was created by adapting the code in MDN Web Docs - Canvas API as shown below: (URL: https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL)

```
const canvas = document.getElementById("canvas");
const dataURL = canvas.toDataURL();

```

How: The code in MDN Web Docs was implemented by using the toDataURL() method to convert the canvas content into an image and programmatically trigger the download by creating a temporary link element.

Why: MDN's code was used because it provides a standard and reliable method for downloading images from a canvas.

How Modified: The original code was customized to include a validation check for an empty canvas and manage the creation and removal of the download link for a clean DOM structure.


### server.js

*Lines 13 - 41*

```
app.get('/api/images', async (req, res) => {
    const query = req.query.query;

    if (!query) {
        return res.status(400).json({ message: 'Query parameter is required' });
    }

    try {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}`, {
            headers: {
                Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
                'Accept-Version': 'v1'
            }
        });

        const data = await response.json();

        console.log('Unsplash API Response:', data);

        if (!data.results || data.results.length === 0) {
            return res.status(404).json({ message: 'No images found for this search term.' });
        }

        res.json(data);
    } catch (error) {
        console.error('Error fetching images:', error);
        res.status(500).json({ message: 'Error fetching images' });
    }
});

```

The code above was created by adapting the code in Unsplash API Documentation as shown below: (URL: https://unsplash.com/documentation)

```
fetch('https://api.unsplash.com/search/photos?query=office&client_id=YOUR_ACCESS_KEY')
    .then(response => response.json())
    .then(data => console.log(data));

```

How: The code from Unsplash API documentation was implemented to handle GET requests and fetch images based on the user's query.

Why: Unsplash's approach was used because it demonstrates the correct API structure for retrieving images.

How Modified: The original code was integrated into an Express.js route and enhanced with error handling to ensure graceful API request management.

## Artificial Intelligence Tools Used

none

## Acknowledgments

none
