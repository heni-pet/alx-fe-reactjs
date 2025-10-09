React Query Demo
Objective

Demonstrate advanced data handling using React Query to fetch, cache, and update data efficiently from a public API.

Overview

This project shows how React Query simplifies data fetching and state management in React applications.
It uses the JSONPlaceholder API to retrieve a list of posts and highlights caching, refetching, and error handling.

Features

Fetch posts from a public API using useQuery

Automatic caching and background refetching

Manual refetch button

Loading and error states

Data persistence on navigation (caching behavior)

Tech Stack

React (Vite)

React Query (@tanstack/react-query)

JavaScript (ES6)

JSONPlaceholder API

Installation

Clone the repository:

git clone https://github.com/your-username/react-query-demo.git
cd react-query-demo


Install dependencies:

npm install


Start the development server:

npm run dev

Project Structure
react-query-demo/
├── src/
│   ├── components/
│   │   └── PostsComponent.jsx
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── README.md

API Reference

Endpoint:
https://jsonplaceholder.typicode.com/posts

Response Example:

[
  {
    "userId": 1,
    "id": 1,
    "title": "Sample Title",
    "body": "Post body content."
  }
]

How It Works

App.jsx wraps the app with QueryClientProvider to enable React Query.

PostsComponent.jsx uses useQuery to fetch posts.

Cached data loads instantly when revisiting the component.

Clicking the refetch button updates the data manually.

Expected Behavior

First load shows "Loading posts..."

Once data loads, posts display instantly.

Clicking "Refetch Posts" fetches new data.

On reload or remount within 60 seconds, data loads from cache.