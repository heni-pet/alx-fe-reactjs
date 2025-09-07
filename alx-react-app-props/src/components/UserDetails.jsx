import React, { useContext } from 'react';
import UserContext from './UserContext';


function UserDetails() {
const userData = useContext(UserContext);


// Defensive UI if provider isn't present (helps during unit tests / storybook)
if (!userData) {
return <div>⚠️ No user data available.</div>;
}


return (
<div>
<p><strong>Name:</strong> {userData.name}</p>
<p><strong>Email:</strong> {userData.email}</p>
</div>
);
}


export default UserDetails;