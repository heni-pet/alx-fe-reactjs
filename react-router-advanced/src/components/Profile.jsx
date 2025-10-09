import React from "react";
import { BrowserRouter,Router,Route,Link, Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <h2>User Profile</h2>
      <ul>
        <BrowserRouter>
          <Route>
            <li><Link to="details">Profile Details</Link></li>
            <li><Link to="settings">Profile Settings</Link></li>
          </Route>
        </BrowserRouter>
      </ul>
      <Outlet />
    </div>
  );
}
