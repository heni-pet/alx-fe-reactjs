import { Routes, BrowserRouter,Route, Link } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import RecommendationsList from './components/RecommendationsList';
import FavoritesList from './components/FavoritesList';

export default function App() {
  return (
    <main>
      <h1>Recipe Sharing App</h1>
      <SearchBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddRecipeForm />
              <RecipeList />
              <RecommendationsList />
              <FavoritesList />
            </>
          }
        />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </main>
  );
}

