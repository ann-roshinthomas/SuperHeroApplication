How to run Superhero project locally

Clone repository
In the project directory, you can run:

### `npm install`

### `npm start`

Runs the app in the development mode.

Open [http://localhost:3000] to view it in the browser.

#######################################

#######################################

### Project Objectives

1. Build a Superhero application with three high level requirements - Fetch search results from API, View detailed information per super hero, add/remove superheroes for comparison

### High level User functionality

1. Main header to navigate between Search and Compare pages
2. Search bar with auto complete to fetch superhero details
3. Modal window to display superhero details on clciking from search results
4. Add to Compare and Remove from Compare button from Modal window
5. Compare table to see differences between super heroes with Remove button

### Design Choices

1. React Router hashlink to navigate between Search and Compare pages - To enable smooth scrolling and place all content on a single scrollable page
2. Search bar implemented with debounce - To minimize API hits
3. Modal window and compare table implemented with Material UI - It provides attractive UI with fast implementation
