import { useRecipeStore } from './recipeStore';

export default function DeleteRecipeButton({ recipeId, onDelete }) {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);

  return (
    <button
      onClick={() => {
        deleteRecipe(recipeId);
        onDelete?.();
      }}
    >
      Delete Recipe
    </button>
  );
}
