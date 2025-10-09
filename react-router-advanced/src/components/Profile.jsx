import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <h2>User Profile</h2>
      <ul>
        <li><Link to="details">Profile Details</Link></li>
        <li><Link to="settings">Profile Settings</Link></li>
      </ul>
      <Outlet />
    </div>
  );
}
