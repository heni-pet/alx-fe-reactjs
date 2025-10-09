import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the app. Explore the routes below:</p>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/posts/5">Blog Post 5</Link></li>
      </ul>
    </div>
  );
}
