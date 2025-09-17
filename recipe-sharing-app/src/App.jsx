import { Routes, BrowserRouter,Route, Link } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import RecommendationsList from './components/RecommendationsList';
import FavoritesList from './components/FavoritesList';
import ErrorBoundary from './components/ErrorBoundary';

export default function App() {
  return (
    <main>
      <h1>Recipe Sharing App</h1>
      <SearchBar />
      <Routes>
        <Route
          path="/"
          element={
            <ErrorBoundary>
              <AddRecipeForm />
              <RecipeList />
              <RecommendationsList />
              <FavoritesList />
            </ErrorBoundary>
          }
        />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </main>
  );
}

