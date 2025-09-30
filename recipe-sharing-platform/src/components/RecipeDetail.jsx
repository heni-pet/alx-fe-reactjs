import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"

export default function RecipeDetail() {
  const { id } = useParams()
  const [recipe, setRecipe] = useState(null)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      .then(data => {
        const found = data.find(r => r.id === parseInt(id))
        if (found) {
          setRecipe(found)
          setNotFound(false)
        } else {
          setNotFound(true)
        }
      })
      .catch(err => {
        console.error("Failed to load recipe:", err)
        setNotFound(true)
      })
  }, [id])

  if (notFound) {
    return (
      <main className="p-6 bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Recipe Not Found</h1>
          <p className="text-gray-600 mb-6">
            The recipe you’re looking for does not exist.
          </p>
          <Link
            to="/"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Back to Home
          </Link>
        </div>
      </main>
    )
  }

  if (!recipe) return <p className="p-6">Loading recipe...</p>

  return (
    <main className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
            <ul className="list-disc list-inside text-gray-700">
              {recipe.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              {recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </section>

          <Link
            to="/"
            className="inline-block mt-6 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
