# First Page :
## Overview
This document provides an overview of the "Movie Page" component, which displays a navigation bar with search functionality, a list of videos, and pagination buttons.

# Features
# Navigation Bar:

Contains a search input field.
Includes a "Home" link to return to the homepage(Refresh).

# Movie List:

Displays a paginated list of videos.
Each video item includes a  image,title,rating and overview.

# Pagination Buttons:

Provides "Next" and "Prev" buttons for navigating through the movie list.

# Components
The Video Page consists of the following components:

## NavBar: 
Displays the navigation bar with search input and "Home" link.

## VideoList: 
Renders the paginated list of movies.

## Pagination: 
Renders the "Next" and "Previous" buttons for navigating the movies list.



# Second Page :
## Overview
When you click on the title area of any movie card you will be redirected to movie details page, which displays movie details and includes a home button for navigation.



# Features
# Home Button:

Allows users to navigate back to the homepage.
# Movie Details:

Displays detailed information about a selected movie, such as title, poster, description, Year, Cast, Director, etc.

# Components
The Movie Details Page consists of the following components:

## HomeButton: 
Displays the home button for navigating back to the homepage.

## MovieDetails: 
Renders detailed information about the selected movie.




# Technologies Used
React.js: Frontend library for building user interfaces.
CSS: Styling the web page.
State Management : Redux, Redux toolkit, persist redux
Routing : React Router
enviornment variable : for authentication key

# Installation
## Clone the repository:


git clone 
https://github.com/harishakaharu/gsiv23_harish_bisht

Navigate to the project directory:
cd your-repo

Install dependencies:
npm install

Usage
Start the development server:

npm start