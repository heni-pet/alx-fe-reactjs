import React from 'react'
import AddRecipeForm from './Components/AddRecipeForm'
import RecipeList from './Components/RecipeList'

function App() {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  )
}

export default App
