import { useState, useEffect } from "react"
import recipesData from "../data.json"

export default function HomePage() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    setRecipes(recipesData)
  }, [])

  return (
    <main className="p-6 bg-gray-50 min-h-screen">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
        {recipes.map(recipe => (
          <div
            key={recipe.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transform hover:scale-105 transition duration-300"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-600 mb-4">{recipe.summary}</p>
              <a
                href={`/recipes/${recipe.id}`}
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                View Recipe
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
