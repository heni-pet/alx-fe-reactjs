import { createContext } from 'react';


// Default value is null so consumers can handle the "no-data" case.
const UserContext = createContext(null);


export default UserContext