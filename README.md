# React Drink Search App

A simple React frontend to search and display cocktail drinks using a Node.js backend and TheCocktailDB API.

## 🧰 Features

- Search for drinks by name
- Displays name and image of drinks
- Handles API via backend POST request
- Clean architecture using React Hooks
- Centralized API handler for POST requests

## 📦 Tech Stack

- React (CRA)
- React Router
- Fetch API
- Axios
- Tailwind / CSS Modules (customizable)
- Node
- Express


---


# Drink Search API – Backend

Node.js + Express backend to handle POST requests from frontend, fetch data from TheCocktailDB API, and return only name and image of drinks.

## 🧰 Features

- Accepts POST request with `search` term
- Fetches from CocktailDB API
- Filters only `strDrink` and `strDrinkThumb`
- Uses clean controller + route architecture
- Ready for production expansion

## 📦 Tech Stack

- Node.js
- Express.js
- Axios
- dotenv
- CORS

## 🚀 Getting Started

### 1. Install dependencies


npm install

