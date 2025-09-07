import React from 'react';
import UserDetails from './UserDetails';


function UserInfo() {
// No props — the details component reads from context.
return (
<section>
<h2>User info</h2>
<UserDetails />
</section>
);
}


export default UserInfo;

