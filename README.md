# Quote-Quest-

Created by: Avionte Williams and Suru Afariogun

🚀 Mission Statement
Our application, Quote-Quest, is for people who know or want to know the creators of famous quotes. It allows users to test their knowledge by matching the correct speakers with their quotes in a quote trivia game.

API & React Router
API: https://zenquotes.io/
API Documentation
Endpoint #1: /quotes
Purpose: Load 50 random quotes to create a dynamic background.
Data used: Quotes.
Endpoint #2: /random
Purpose: Fetch a quote for the user to guess the speaker.
Data used: Quote text, speaker name.
Endpoint #3: /today
Purpose: Display the Quote of the Day.
Data used: One specific quote refreshed daily.

🗺️ Frontend Routes and Features
Home Page:Display Quote of the Day.
Visually engaging background with 50 random quotes.
Game Page:Fetch a random quote.
Multiple choice options for guessing the speaker.
Score tracking.
Stretch Features (if time permits):Music playback during gameplay.
Difficulty settings.
User-generated quotes.

📆 Timeline for MVP (1 Week)
Day 1 – Project Setup & Initial Design
Setup React project structure with routing using React Router.
Create basic UI wireframes for Home and Game pages.
Integrate and test ZenQuotes API endpoints (/quotes, /random, /today) with basic fetch functionality.
Day 2 – Home Page Functionality
Implement background quote rendering using /quotes (50 random quotes).
Display Quote of the Day from /today endpoint.
Style Home Page to reflect app branding and improve user experience.
Day 3 – Core Game Logic (MVP Due EOD)
Implement Game Page layout.
Fetch random quote from /random for gameplay.
Create logic for multiple-choice answers and check user selection.
Track user score and provide feedback after each guess.
Day 4 – Enhancements and Testing
Add ability to fetch a new quote after each round.
Store and display game statistics (e.g., correct/incorrect answers).
Begin writing unit tests for key components (API fetch, score logic).
Day 5 – Polish and Deploy MVP
Final styling improvements and responsive design.
Add navigation between Home and Game pages.
Prepare and deploy app
Create README with instructions, features, and deployment link.
