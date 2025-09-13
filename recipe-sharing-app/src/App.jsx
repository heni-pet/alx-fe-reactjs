import React from 'react'
import SearchBar from './components/SearchBar';
import AddRecipeForm from './Components/AddRecipeForm'
import RecipeList from './Components/RecipeList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <SearchBar />
        <AddRecipeForm />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipes/:id" element={<RecipeDetailsWrapper />} />
        </Routes>
      </div>
    </Router>
  );
}
// Wrapper to extract route params
import { useParams } from 'react-router-dom';
const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={id} />;
};
export default App;
