import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from   './components/RecipeList';
export default function App() {
  return (
    <main>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </main>
  );
}
