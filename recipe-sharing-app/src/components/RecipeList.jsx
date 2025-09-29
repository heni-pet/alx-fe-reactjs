import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

export default function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm.trim() !== '');

  const listToShow = searchTerm ? filteredRecipes : recipes;

  if (listToShow.length === 0) return <p>No matching recipes.</p>;

  return (
    <div>
      {listToShow.map((recipe) => (
        <div key={recipe.id}>
          <h3>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
}
