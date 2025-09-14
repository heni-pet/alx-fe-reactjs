// src/components/SearchBar.jsx
import React from 'react'
import { useRecipeStore } from './recipeStore'

export default function SearchBar() {
  const setSearchTerm = useRecipeStore(s => s.setSearchTerm)
  const filterRecipes = useRecipeStore(s => s.filterRecipes)

  const handleChange = e => {
    setSearchTerm(e.target.value)
    filterRecipes()
  }

  return (
    <input
      type="text"
      placeholder="Search recipes…"
      onChange={handleChange}
      className="search-input"
    />
  )
}
