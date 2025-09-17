import { useRecipeStore } from './recipeStore'
import { Link } from 'react-router-dom'

export default function RecipeList() {
  const { recipes, filteredRecipes } = useRecipeStore(state => ({
    recipes: state.recipes,
    filteredRecipes: state.filteredRecipes
  }))

  const list = filteredRecipes.length ? filteredRecipes : recipes

  return (
    <div>
      {list.length === 0 && <p>No recipes yet.</p>}
      {list.map(r => (
        <div key={r.id}>
          <h3>
            <Link to={`/recipe/${r.id}`}>{r.title}</Link>
          </h3>
          <p>{r.description}</p>
        </div>
      ))}
    </div>
  )
}

