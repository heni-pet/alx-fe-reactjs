import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile';
import Header from './components/Header'
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter';
import ProfilePage from "./components/ProfilePage";
import UserContext from "./UserContext";

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

return (
  <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
