import { useParams } from "react-router-dom"
import React,  { useEffect, useState } from "react"
import data from '../data.json'

export default function RecipeDetail() {
  const { id } = useParams()
  const [recipe, setRecipe] = useState(null)

  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      .then(data => {
        const found = data.find(r => r.id === parseInt(id))
        setRecipe(found)
      })
  }, [id])

  if (!recipe) return <p className="text-center mt-8">Loading recipe...</p>

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
      />
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc pl-5 mb-4">
        {recipe.ingredients?.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mb-2">Steps</h2>
      <ol className="list-decimal pl-5 space-y-2">
        {recipe.steps?.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  )
}
