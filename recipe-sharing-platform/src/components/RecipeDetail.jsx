import { useParams, Link } from "react-router-dom"
import { useRecipes } from "./RecipeContext"

export default function RecipeDetail() {
  const { id } = useParams()
  const { recipes } = useRecipes()
  const recipe = recipes.find(r => r.id === parseInt(id))

  if (!recipe) {
    return (
      <div className="p-6">
        <p className="text-red-500">Recipe not found.</p>
        <Link to="/" className="text-blue-600 underline">
          Back to Home
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-xl">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <h2 className="text-3xl font-bold mb-4">{recipe.title}</h2>
      <p className="text-gray-700 mb-6">{recipe.summary}</p>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Ingredients</h3>
        <ul className="list-disc list-inside text-gray-700">
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Preparation Steps</h3>
        <p className="text-gray-700 whitespace-pre-line">{recipe.steps}</p>
      </div>

      <div className="mt-6">
        <Link
          to="/"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
