import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile';
import Header from './components/Header'
import MainContent from './components/MainContent';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" />
        <UserProfile 
        name="John" 
        age="28" 
        bio="Learning React at ALX and enjoys coding!" />

    </div>
  );
}

export default App;
