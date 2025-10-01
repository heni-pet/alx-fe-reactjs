import { useState } from "react"

export default function AddRecipeForm() {
  const [title, setTitle] = useState("")
  const [ingredients, setIngredients] = useState("")
  const [instructions, setInstructions] = useState("")
  const [errors, setErrors] = useState({})  // track errors

  const validate = () => {
    const newErrors = {}
    if (!title.trim()) newErrors.title = "Title is required"
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required"
    else if (ingredients.split(",").map(i => i.trim()).length < 2)
      newErrors.ingredients = "At least 2 ingredients required"
    if (!instructions.trim()) newErrors.instructions = "Instructions are required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!validate()) return

    const recipe = {
      title,
      ingredients: ingredients.split(",").map(i => i.trim()),
      instructions: instructions.split("\n").map(s => s.trim()).filter(s => s),
    }

    console.log("New Recipe:", recipe)
    alert("Recipe submitted successfully!")

    setTitle("")
    setIngredients("")
    setInstructions("")
    setErrors({})
  }

  return (
    <div className="flex justify-center mt-10">
      <div className="md:w-full max-w-lg p-8 bg-white rounded-3xl shadow-xl">
        <h2 className="md:text-3xl font-bold text-center text-gray-800 mb-8">Add New Recipe</h2>
        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="md:w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-gray-50"
              placeholder="Recipe Title"
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
          </div>

          <div>
            <textarea
              value={ingredients}
              onChange={e => setIngredients(e.target.value)}
              className="md:w-full border border-gray-300 rounded-xl px-4 py-3 h-28 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent bg-gray-50 resize-none"
              placeholder="Ingredients (comma-separated)"
            />
            {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
          </div>

          <div>
            <textarea
              value={instructions}
              onChange={e => setInstructions(e.target.value)}
              className="md:w-full border border-gray-300 rounded-xl px-4 py-3 h-36 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent bg-gray-50 resize-none"
              placeholder="Instructions (one per line)"
            />
            {errors.instructions && <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>}
          </div>

          <button
            type="submit"
            className="md:w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold text-lg shadow-lg hover:from-blue-600 hover:to-indigo-600 transition-all"
          >
            Submit Recipe
          </button>
        </form>
      </div>
    </div>
  )
}
