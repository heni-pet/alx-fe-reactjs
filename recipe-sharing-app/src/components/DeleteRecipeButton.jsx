import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';
export default function DeleteRecipeButton({ recipeId, onDelete }) {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        deleteRecipe(recipeId);
        onDelete?.();
        navigate('/');
      }}
    >
      Delete Recipe
    </button>
  );
}
