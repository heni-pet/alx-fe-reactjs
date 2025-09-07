
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile';
import Header from './components/Header'
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter';
import  { useState, useEffect } from "react";

function App() {
  const [views, setViews] = useState(0);

  useEffect(() => {
    let count = localStorage.getItem("pageViews");

    if (count) {
      count = parseInt(count) + 1;
    } else {
      count = 1;
    }

    localStorage.setItem("pageViews", count);
    setViews(count);
  }, []);
  const resetCounter = () => {
    localStorage.removeItem("pageViews");
    setViews(0);
  };

  return (
    <div>
      <WelcomeMessage />
      <h2>Page Views Counter</h2>
      <p>This page has been viewed {views} times.</p>
      <button onClick={resetCounter}>Reset Counter</button>
      <Header />
      <MainContent />
      <Counter />
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