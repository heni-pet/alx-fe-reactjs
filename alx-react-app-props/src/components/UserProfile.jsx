import React, { useContext } from 'react';
import UserContext from '../UserContext'; // <-- path: from src/components -> up to src -> UserContext.js

function UserProfile() {
  const userData = useContext(UserContext);

  if (!userData) {
    return <div data-testid="no-user">⚠️ No user data available.</div>;
  }

  return (
    <div data-testid="user-profile">
      <p data-testid="user-name"><strong>Name:</strong> {userData.name}</p>
      <p data-testid="user-email"><strong>Email:</strong> {userData.email}</p>
    </div>
  );
}

export default UserProfile;