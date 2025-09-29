import RecipeList from './components/RecipeList'
import { Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails'
import DeleteRecipeButton from './components/DeleteRecipeButton'
import SearchBar from './components/SearchBar';
import RecommendationsList from './components/RecommendationsList';
import FavoritesList from './components/FavoritesList';
function App() {
  return (
    <div>
      <main><Routes>
        <Route
          path="/"
          element={
            <>
             <h1>Recipe Sharing App</h1>
              <AddRecipeForm />
              <SearchBar />
              <RecipeList />
              <FavoritesList />
              <RecommendationsList />
            </>
          }
        />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes></main>
    </div>
  )
}

export default App
