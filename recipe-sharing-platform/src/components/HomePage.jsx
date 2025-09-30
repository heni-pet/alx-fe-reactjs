import { Link } from "react-router-dom"
import {useRecipes}  from './RecipeContext';

export default function HomePage() {
  const { recipes } = useRecipes()

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Recipes</h1>
        <Link
          to="/add"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add Recipe
        </Link>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {recipes.map(recipe => (
          <Link
            to={`/recipe/${recipe.id}`}
            key={recipe.id}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-600 text-sm">{recipe.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
