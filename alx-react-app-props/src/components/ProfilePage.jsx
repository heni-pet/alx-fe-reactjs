import React from 'react';
import  UserInfo from './UserInfo.jsx';


function ProfilePage() {
// No userData prop required anymore; it's provided by UserContext.
return (
<main>
<h1>Profile</h1>
<UserInfo />
</main>
);
}


export default ProfilePage;