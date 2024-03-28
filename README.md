# Meme Generator

This project is a simple meme generator built using React. It allows users to customize meme captions and generate a random meme image from a provided API.

## Features

- Input fields for adding custom text to the top and bottom of the meme image.
- Button to fetch a random meme image from the [Imgflip API](https://api.imgflip.com/get_memes).
- Display of the generated meme with the custom text overlaid.

## Technologies Used

- React: Used for building the user interface and managing state.
- useState Hook: Used to manage component-level state for storing meme data.
- useEffect Hook: Used to fetch meme data from the Imgflip API when the component mounts.
- Fetch API: Used to make asynchronous requests to the Imgflip API to fetch meme data.
- CSS: Used for styling the user interface elements.

## Usage

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install project dependencies.
4. Run `npm start` to start the development server.
5. Open your browser and navigate to `http://localhost:3000` to view the application.

## How to Use

1. Enter custom text in the "Top text" and "Bottom text" input fields.
2. Click the "Get a new meme image 🖼" button to fetch a random meme image.
3. The generated meme will be displayed below with the custom text overlaid on the image.

## Contributors

- [Digbijaya Lenka](mailto:digbijayalenka@gmail.com)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- This project was inspired by [Imgflip](https://imgflip.com/) and their meme generator tools.
- Special thanks to [Imgflip](https://api.imgflip.com/get_memes) for providing the API used to fetch meme images.

Feel free to contribute to this project by submitting pull requests or opening issues for bug fixes or feature enhancements. We welcome any feedback or suggestions you may have!