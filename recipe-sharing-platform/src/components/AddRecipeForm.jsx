import { useState } from "react"

export default function AddRecipeForm() {
  const [title, setTitle] = useState("")
  const [ingredients, setIngredients] = useState("")
  const [steps, setSteps] = useState("")

  const handleSubmit = e => {
    e.preventDefault()

    if (!title.trim() || !ingredients.trim() || !steps.trim()) {
      alert("All fields are required")
      return
    }

    const ingredientList = ingredients.split(",").map(i => i.trim())
    if (ingredientList.length < 2) {
      alert("Please enter at least 2 ingredients")
      return
    }

    const recipe = {
      title,
      ingredients: ingredientList,
      steps: steps.split("\n").map(s => s.trim()).filter(s => s),
    }

    console.log("New Recipe:", recipe)
    alert("Recipe submitted successfully!")

    setTitle("")
    setIngredients("")
    setSteps("")
  }

  return (
    <div className="flex justify-center mt-10">
      <div className="w-full max-w-lg p-8 bg-white rounded-3xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Add New Recipe</h2>
        <form onSubmit={handleSubmit} className="space-y-6">

          <div className="relative">
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="peer w-full border border-gray-300 rounded-xl px-4 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-gray-50"
              placeholder=" "
            />
            <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-gray-600 peer-focus:text-sm">
              Recipe Title
            </label>
          </div>

          <div className="relative">
            <textarea
              value={ingredients}
              onChange={e => setIngredients(e.target.value)}
              className="peer w-full border border-gray-300 rounded-xl px-4 pt-6 pb-2 h-28 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent bg-gray-50 resize-none"
              placeholder=" "
            />
            <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-gray-600 peer-focus:text-sm">
              Ingredients (comma-separated)
            </label>
          </div>

          <div className="relative">
            <textarea
              value={steps}
              onChange={e => setSteps(e.target.value)}
              className="peer w-full border border-gray-300 rounded-xl px-4 pt-6 pb-2 h-36 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent bg-gray-50 resize-none"
              placeholder=" "
            />
            <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-gray-600 peer-focus:text-sm">
              Steps (one per line)
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold text-lg shadow-lg hover:from-blue-600 hover:to-indigo-600 transition-all"
          >
            Submit Recipe
          </button>
        </form>
      </div>
    </div>
  )
}
