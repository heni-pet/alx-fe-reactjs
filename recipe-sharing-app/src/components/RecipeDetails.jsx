import { useParams, Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

export default function RecipeDetails() {
  const { id } = useParams();
  const recipe = useRecipeStore((s) =>
    s.recipes.find((r) => r.id === id) // string comparison
  );

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />
      <p>
        <Link to="/">Back to list</Link>
      </p>
    </div>
  );
}
