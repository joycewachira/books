**Bookstore Web Application**

This is a React-based web application that serves as a virtual bookstore. Users can explore a collection of best-selling books, search for specific titles, and manage their own reading list. The app utilizes React Router for client-side routing to provide a smooth and seamless user experience.

**Getting Started**

To run the application locally, follow these steps:

1. Clone the repository:
git clone https://github.com/joycewachira/books
cd bookstore-app

2. Install dependencies:
npm install

3. Start the development server:
npm run dev

The app will open in your default web browser at `http://localhost:3000`.

**Features**

The application provides the following features:

1. Home Page: Displays a list of best-selling books retrieved from an external API. Users can browse through the list and click on a book to view more details.

2. Book Details: When a user clicks on a specific book from the Home page, they are redirected to the Book Details page, where they can find more information about the selected book.

3. Search Functionality: Users can search for books using keywords. The app will filter and display the relevant best-selling books matching the search query.

4. My Reads: Users can access their personal reading list, known as "My Reads," by navigating to the My Reads page. Here, they can manage and keep track of books they plan to read.

**Components**

The application is divided into the following components:

- NavBar: A reusable component that displays the navigation bar at the top of the page.

- RootLayout: The root layout component that wraps the entire application and includes the NavBar component. It also provides the search functionality across the application.

- Home: The main home page component that displays the list of best-selling books fetched from the external API.

- BestsellerPage: The component that shows detailed information about a specific book, accessed via the book's unique ID.

- MyReads: The component that displays the user's personalized reading list, allowing them to manage the books they want to read.

**External API**

The application fetches data from an external API, which provides information about best-selling books. The API base URL is stored in the constants.js file.

**Technologies Used**

The application is built using the following technologies and libraries:

- React: A JavaScript library for building user interfaces.

- React Router: A library for client-side routing in React applications, enabling seamless navigation.

**Contributing**

Contributions to this project are welcome. If you find any bugs, have suggestions, or want to add new features, feel free to open an issue or submit a pull request.

**License**

This project is licensed under the MIT License. You can find the full license text in the LICENSE file.

**Author**

This application was created by [Joyce Wachira](https://github.com/joycewachira/books).
