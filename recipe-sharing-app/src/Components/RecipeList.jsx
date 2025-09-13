// RecipeList component
  import { useRecipeStore } from './RecipeStore';

  const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);
     const filtered = useRecipeStore((state) => state.filteredRecipes);

  if (!filtered.length) return <p>No recipes match your search.</p>;


   return (
    <ul>
      {filtered.map((recipe) => (
        <li key={recipe.id}>{recipe.title}</li>
      ))}
    </ul>
  );
}
export default RecipeList;
