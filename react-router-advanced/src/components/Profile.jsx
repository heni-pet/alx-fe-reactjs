import React from "react";
import { BrowserRouter,Router,Route,Link, Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <h2>User Profile</h2>
      <ul>
        <BrowserRouter>
          <Route>
            <Route path="details" element={<Link to="details">Profile Details</Link>} />
            <Route path="settings" element={<Link to="settings">Profile Settings</Link>} />
          </Route>
        </BrowserRouter>
      </ul>
      <Outlet />
    </div>
  );
}
