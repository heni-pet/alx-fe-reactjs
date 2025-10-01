import { createContext, useContext, useState } from "react"

const RecipeContext = createContext()

export function RecipeProvider({ children }) {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      title: "Spaghetti Carbonara",
      summary:
        "A classic Italian pasta dish with eggs, cheese, bacon, and black pepper.",
      image: "https://via.placeholder.com/150",
      ingredients: ["Spaghetti", "Eggs", "Cheese", "Bacon", "Black Pepper"],
      instructions: "Boil pasta, cook bacon, mix eggs & cheese, combine everything."
    },
    {
      id: 2,
      title: "Chicken Tikka Masala",
      summary:
        "Chunks of grilled chicken cooked in a creamy tomato-based gravy.",
      image: "https://via.placeholder.com/150",
      ingredients: ["Chicken", "Tomatoes", "Cream", "Spices"],
      instructions: "Grill chicken, cook tomato sauce, add cream, mix chicken in sauce."
    }
  ])

  const addRecipe = recipe => {
    setRecipes(prev => [
      ...prev,
      {
        ...recipe,
        id: prev.length + 1,
        image: "https://via.placeholder.com/150"
      }
    ])
  }

  return (
    <RecipeContext.Provider value={{ recipes, addRecipe }}>
      {children}
    </RecipeContext.Provider>
  )
}

export const useRecipes = () => useContext(RecipeContext)
