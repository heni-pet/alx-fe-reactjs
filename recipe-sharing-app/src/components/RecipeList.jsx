import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

export default function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      {recipes.length === 0 && <p>No recipes yet.</p>}
      {recipes.map((r) => (
        <div key={r.id}>
          <h3>
            <Link to={`/recipe/${r.id}`}>{r.title}</Link>
            </h3>
          <p>{r.description}</p>
        </div>
      ))}
    </div>
  );
}
