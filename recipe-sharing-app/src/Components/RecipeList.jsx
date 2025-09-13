// RecipeList component
  import { useRecipeStore } from './RecipeStore';

  const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);
     const filtered = useRecipeStore((state) => state.filteredRecipes);

  if (!filtered.length) return <p>No recipes match your search.</p>;


   return (
    <div>
        {recipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    
  );
}
export default RecipeList;
