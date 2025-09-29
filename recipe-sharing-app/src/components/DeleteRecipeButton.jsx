import { useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';

export default function DeleteRecipeButton({ recipeId }) {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/');
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
}
